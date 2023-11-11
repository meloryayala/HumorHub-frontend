"use client"

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import axios from "axios";

interface CategoriesData {
    id: number;
    name: string;
}

export const CategoryList = () => {
    const [categories, setCategories] = useState<CategoriesData[]>([]);

    useEffect(() => {
       axios.get("https://backend.melory.codery.ch/category")
           .then(response => {
               setCategories(response.data)
           })
    },[]);

    console.log(categories)


    return (
        <div className="flex">
            <Button variant="outline">
                🏷️ Category name
            </Button>

            {
                categories.map(category => (
                    <Button key={category.id} variant="outline">
                        {category.name}
                    </Button>
                ))
            }
        </div>
    );
};
