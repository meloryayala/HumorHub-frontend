import {useContext} from "react";
import {FilterContext} from "@/context/filterProvider";

export const useFilterContext = () => {
    const filterContext = useContext(FilterContext);
    if (filterContext === undefined) {
        throw new Error(`useFilterContext must be inside a 
        FilterContext`);
    }
    return filterContext;
};

export default useFilterContext;
