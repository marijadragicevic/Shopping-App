import React, { createContext, useEffect, useState } from "react";
import { API } from "../Config/api";
import { API_KEY } from "../Config/apiKey";

//---------CONTEXT (1.define type of data for context; 2.create context)------ //
// 1.
export type ContextType = {
    data: any[],
    loading: boolean,
    getData: (name: string) => void,
    handleFavorites: (payload: any) => void,
    handleCookNow: (title: string) => void
}
const initailValue = {
    data: [],
    loading: true,
    getData: (name: string) => { },
    handleFavorites: (payload: any) => { },
    handleCookNow: (title: string) => { }
}

// 2.
export const Context = createContext<ContextType>(initailValue);

//----CONTEXT PROVIDER (3. define type for props of ContextProvider; 4.create ContextProvider) --------- //

//3.
type Props = { children: React.ReactNode }

// 4.
const ContextProvider: React.FC<Props> = ({ children }) => {

    // state that will be passed as value to ContextProvider 
    const [dishes, setDishes] = useState<{ data: any[], loading: boolean }>({
        data: [],
        loading: true
    });

    // favorites page
    const [favorites, setFavorites] = useState<any[]>([]);
    const [savedTitles, setSavedTitles] = useState<string[]>([]);

    // recipe details page
    const [cookNow, setCookNow] = useState<any>({});

    // history
    const [history, setHistory] = useState<any[]>([]);

    // destructuring 
    const { data, loading } = dishes;

    // function to get data
    const getData = async (name: string) => {
        // set name to localStorage, so when we open app the first time it will display some data
        localStorage.setItem("dish", name);
        const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&number=3&apiKey=${API_KEY}`);
        setDishes({ data: response.data.results, loading: false });
    }


    // function to add or remove items from favorites

    const handleFavorites = (payload: any) => {
        if (!savedTitles.includes(payload.title)) {
            setFavorites([...favorites, payload]);
            setSavedTitles([...savedTitles, payload.title]);
        } else if (savedTitles.includes(payload.title)) {
            let array = favorites.filter(item => item.title !== payload.title);
            setFavorites(array);
            setSavedTitles(savedTitles.filter(savedTitle => savedTitle !== payload.title));
        }
    }

    const handleCookNow = (title: string) => {
        setCookNow(data.find(item => item.title === title));
        setHistory([...history, data.find(item => item.title === title)]);


    }

    // call function when component is mounted the first time
    useEffect(() => {
        getData(localStorage.dish);
    }, []);




    return (
        <Context.Provider value={{ data, loading, getData, handleFavorites, handleCookNow }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;