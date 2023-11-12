"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardContent} from "@/components/ui/card";

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
        getData("https://backend.melory.codery.ch/joke")
    }, [])

  return(
      <div className="mx-[7%]">
          {error && error}
          {loading && loading}
          <div className="grid grid-cols-1 gap-y-6">
          {
              jokes.map(joke => (
                  <Card key={joke.id} className="">
                      <CardContent className="p-8">
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