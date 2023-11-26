import React, {createContext, ReactNode, useContext, useState} from 'react';
import {StatisticItem} from "@/types/types";



type FavoriteContextType = {
    favoriteList: StatisticItem[];
    addToFavorites: (item: StatisticItem) => void;
    removeFromFavorites: (item: StatisticItem) => void;
    isInFavorites: (item: StatisticItem) => boolean;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);
type FavoriteProviderProps = {
    children: ReactNode;
};

const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {

    const [favoriteList, setFavoriteList] = useState<StatisticItem[]>([]);

    const addToFavorites = (item: StatisticItem) => {
        setFavoriteList((prevList) => [...prevList, item]);
    };

    const removeFromFavorites = (item: StatisticItem) => {
        setFavoriteList((prevList) => prevList.filter((favItem) => favItem.identifier !== item.identifier));
    };

    const isInFavorites = (item: StatisticItem) => {
        return favoriteList.some((favItem) =>favItem?.identifier === item?.identifier);
    };

    const contextValues: FavoriteContextType = {
        favoriteList,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
    };
    return <FavoriteContext.Provider value={contextValues}>{children}</FavoriteContext.Provider>;
};
const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorite must be used within a FavoriteProvider');
    }
    return context;
};

export { FavoriteProvider, useFavorite };