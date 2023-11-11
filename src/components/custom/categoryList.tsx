"use client"

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import axios from "axios";

export interface CategoryType {
    id: number;
    name: string;
}

export const CategoryList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

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

    return (
        <div>
            {error && error}
            {loading && loading}
            <div className="flex">
                <Button variant="outline">
                    🏷️ Category name
                </Button>

                {categories.map(category => (
                    <Button key={category.name} variant="outline">
                        {category.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};
