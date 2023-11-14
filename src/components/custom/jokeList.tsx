"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardContent} from "@/components/ui/card";
import {useSearchParams } from 'next/navigation';
import Loading from "@/components/custom/loading";

export interface JokeType {
    id: number;
    question: string;
    answer: string;
    categoryId: number;
    categoryName: string;
}

export  const JokeList = () => {
    const [jokes, setJokes] = useState<JokeType[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<number | null>(1);
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const getData = (URL: string) =>  {
        setLoading(90);
        axios.get(URL)
            .then(response => {
                setLoading(100);
                setJokes(response.data);
                setLoading(null);
            }).catch(error => {
            setLoading(100);
            setError(error.message)
            setLoading(null);
        })
    }

    useEffect(() => {
        getData(category === null ? 'https://backend.melory.codery.ch/joke' : `https://backend.melory.codery.ch/joke?category=${category}`)
    }, [category])

  return(
      <div className="mx-[7%]">
          {error && error}
          {loading && <Loading progress={loading}/>}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
              jokes.map(joke => (
                  <Card key={joke.id}>
                      <CardContent className="flex flex-col gap-y-1 p-8">
                          <p className="font-bold">{joke.question}</p>
                          <p className="">{joke.answer}</p>
                      </CardContent>
                  </Card>
              ))
          }
          </div>
      </div>
  )
};