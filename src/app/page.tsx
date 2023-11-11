import {CategoryList} from "@/components/custom/categoryList";
import {JokeList} from "@/components/custom/jokeList";

export default function Home() {
  return (
      <div className="my-20">
        <CategoryList />
          <JokeList />
      </div>
  )
}
