import {Progress} from "@/components/ui/progress";
import {FC} from "react";

interface Props {
    progress: number | null;
}

const Loading: FC<Props> = ({ progress }) => {
    return (
        <div className="flex h-full items-center place-content-center">
            <Progress value={progress} className="w-[20%]" />
        </div>
    );
};
export default Loading;
