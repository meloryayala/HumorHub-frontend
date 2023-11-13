"use client"

import {createContext, useState} from "react";
import {ReactNode} from "react";
import {FC} from "react";

interface Props {
    children: ReactNode;
}

interface FilterContextValue {
    filter: string | null;
    setFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FilterContext = createContext<FilterContextValue | null>(null);

const FilterProvider:FC<Props> = ({children}) => {
    const [filter, setFilter] = useState<string | null>(null)
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    );
};
export default FilterProvider;
