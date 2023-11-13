import {CategoryList} from "@/components/custom/categoryList";
import {JokeList} from "@/components/custom/jokeList";

const Page = ({}) => {
    return (
        <div className="my-[7%] flex flex-col gap-10">
            <CategoryList />
            <JokeList />
        </div>
    );
};
export default Page;
