import { FC, createContext, ReactNode, useState, useMemo, useCallback } from "react";

interface ContextValue {
    ids: string[];
    addToFav: (id: string) => void;
    removeFromFav: (id: string) => void;
}
export const FavouriteContext = createContext<ContextValue>({
    ids: [],
    addToFav: (_id: string) => {},
    removeFromFav: (_id: string) => {},
});
interface FavouriteContextProviderProps {
    children: ReactNode;
}
const FavouriteContextProvider: FC<FavouriteContextProviderProps> = ({ children }) => {
    const [favMealIds, setFavMealIds] = useState<string[]>([]);

    const addFavMeal = useCallback((id: string) => {
        console.log("id", id);
        setFavMealIds((prevFav: string[]) => [...prevFav, id]);
    }, []);

    const removeMealFromFav = useCallback((id: string) => {
        setFavMealIds((prevFav: string[]) => prevFav.filter((favId) => favId !== id));
    }, []);
    const value = useMemo(() => ({ ids: favMealIds, addToFav: addFavMeal, removeFromFav: removeMealFromFav }), [favMealIds]);
    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
};

export default FavouriteContextProvider;
