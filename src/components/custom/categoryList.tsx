"use client"

import {Button} from "@/components/ui/button";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {CategoryIcons} from "@/Contants/constans";
import useFilterContext from "@/hooks/useFilterContext";

export interface CategoryType {
    id: number;
    name: string;
}

export const CategoryList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const {setFilter} = useFilterContext();



    const getData = (URL: string) => {
        axios.get(URL)
            .then(response => {
                setCategories(response.data);
                setLoading(false);
            }).catch(error => {
            setLoading(false);
            setError(error.message)
        })
    }

    useEffect(() => {
        getData("https://backend.melory.codery.ch/category")
    }, [])

    const handleCategoryClick = (categoryName: string) => {
        setFilter(categoryName)
    }

    return (
        <div className="ml-[7%]">
            {error && error}
            {loading && loading}
            <ScrollArea className="whitespace-nowrap">
                <div className="relative overflow-hidden w-full my-2">
                    <div className="flex w-full gap-x-2">
                        <Button variant="outline" className="bg-secondary font-bold flex-shrink-0 overflow-hidden">
                            🏷️ All categories
                        </Button>

                        {categories.map(category => (
                            <Button key={category.name} variant="outline"
                                    className="bg-secondary font-bold flex-shrink-0 overflow-hidden"
                                    onClick={() => handleCategoryClick(category.name)}
                            >
                                {CategoryIcons[category.name.toLowerCase() as keyof typeof CategoryIcons]} {category.name}
                            </Button>
                        ))}
                    </div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};
