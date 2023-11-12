import {CategoryList} from "@/components/custom/categoryList";
import {JokeList} from "@/components/custom/jokeList";

export default function Home() {
  return (
      <div className="my-[7%] flex flex-col gap-5">
        <CategoryList />
          <JokeList />
      </div>
  )
}
