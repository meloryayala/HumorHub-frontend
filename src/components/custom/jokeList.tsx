"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardContent} from "@/components/ui/card";
import useFilterContext from "@/hooks/useFilterContext";

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
    const [loading, setLoading] = useState(true);

    const {filter} = useFilterContext();

    const getData = (URL: string) =>  {
        axios.get(URL)
            .then(response => {
                setJokes(response.data);
                setLoading(false);
            }).catch(error => {
            setLoading(false);
            setError(error.message)
        })
    }

    useEffect(() => {
        getData(filter ? `https://backend.melory.codery.ch/joke?category=${filter}` : 'https://backend.melory.codery.ch/joke')
    }, [filter])

  return(
      <div className="mx-[7%]">
          {error && error}
          {loading && loading}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
              jokes.map(joke => (
                  <Card key={joke.id} className="">
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