"use client"

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import axios from "axios";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {CategoryIcons} from "@/Contants/constans";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export interface CategoryType {
    id: number;
    name: string;
}

export const CategoryList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');

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
        getData("https://backend.melory.codery.ch/category");
    }, [])

    return (
        <div className="ml-[7%]">
            {error && error}
            {loading && loading}
            <ScrollArea className="whitespace-nowrap">
                <div className="relative overflow-hidden w-full my-4">
                    <div className="flex w-full gap-x-2">
                        {!loading &&
                            <Button
                                variant="outline"
                                className={`bg-secondary font-bold flex-shrink-0 overflow-hidden md:hover:bg-secondary ${activeCategory === null && "bg-foreground text-background cursor-not-allowed"}`}
                            >
                                <Link href="/">
                                🏷️ All categories
                                </Link>
                            </Button>}

                        {categories.map(category => (
                            <Button key={category.name} variant="outline"
                                    className={`bg-secondary font-bold flex-shrink-0 overflow-hidden md:hover:bg-secondary ${category.name === activeCategory && "bg-foreground text-background cursor-not-allowed"}`}
                            >
                                <Link href={`/jokes?category=${category.name}`}>
                                    {CategoryIcons[category.name.toLowerCase() as keyof typeof CategoryIcons]} {category.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
                <ScrollBar orientation="horizontal" className="invisible"/>
            </ScrollArea>
        </div>
    );
};
