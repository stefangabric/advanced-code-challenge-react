import React from 'react';
import {StatisticItem} from "@/types/types";
import SearchItem from "@/Components/SearchItem/SearchItem";
type SearchResultsType={
    statistics:StatisticItem[]
}
const SearchResults = ({statistics}:SearchResultsType) =>{
    if(!statistics) return null


    return statistics?.map((statistic:StatisticItem,index:number)=>(
        <SearchItem statistic={statistic} index={index}/>
    ));
};

export default (SearchResults);
