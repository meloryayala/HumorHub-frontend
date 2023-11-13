import {CategoryList} from "@/components/custom/categoryList";
import {JokeList} from "@/components/custom/jokeList";

export default function Home() {
    return (
        <div className="my-[5%] flex flex-col gap-10">
            <CategoryList />
            <JokeList />
        </div>
    )
}
