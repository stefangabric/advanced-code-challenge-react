import React from 'react';
import {useFavorite} from "@/Context/FavoriteContext";
import {StatisticItem} from "@/types/types";
type FavoriteType={
    statistic:StatisticItem
}
const FavoriteBadge = ({statistic}:FavoriteType) =>{
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorite();
    return isInFavorites(statistic) ?
        (<svg onClick={() => removeFromFavorites(statistic)} className="w-6 h-6 text-gray-800 dark:text-white absolute bottom-5 right-5 cursor-pointer"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
            <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
        </svg>)
        :
        (<svg onClick={() => addToFavorites(statistic)} className="w-6 h-6 text-gray-800 dark:text-white absolute bottom-5 right-5 cursor-pointer"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
    </svg>)

};

export default (FavoriteBadge);


