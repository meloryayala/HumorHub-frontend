"use client"

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import axios from "axios";

interface CategoryList {
    id: number;
    name: string;
}

export const CategoryList = () => {
    const [categories, setData] = useState<CategoryList[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const getData = (URL: string) =>  {
        axios.get(URL)
            .then(response => {
                setData(response.data);
                setLoading(false);
            }).catch(error => {
            setLoading(false);
            setError(error.message)
        })
    }

    useEffect(()=> {
        getData("https://backend.melory.codery.ch/category")
    })

    return (
        <div className="flex">
            <Button variant="outline">
                🏷️ Category name
            </Button>
            {error && error}
            {loading && loading}
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
