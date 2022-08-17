import React, { createContext, useEffect, useState } from "react";
import { API } from "../Config/api";
import { API_KEY } from "../Config/apiKey";

//---------CONTEXT (1.define type of data for context; 2.create context)------ //
// 1.
export type ContextType = {
    dataDishes: any[],
    loadingDishes: boolean,
    dataRandom: any[],
    loadingRandom: boolean,
    favorites: any[],
    cookNow: any,
    history: any[],
    getData: (name: string) => void,
    handleFavorites: (payload: any) => void,
    handleCookNow: (title: string) => void,
    handleHistory: (title: string) => void
}
const initailValue = {
    dataDishes: [],
    loadingDishes: true,
    dataRandom: [],
    loadingRandom: true,
    favorites: [],
    cookNow: {},
    history: [],
    getData: (name: string) => { },
    handleFavorites: (payload: any) => { },
    handleCookNow: (title: string) => { },
    handleHistory: (title: string) => { }
}

// 2.
export const Context = createContext<ContextType>(initailValue);

//----CONTEXT PROVIDER (3. define type for props of ContextProvider; 4.create ContextProvider) --------- //

//3.
type Props = { children: React.ReactNode }

// 4.
const ContextProvider: React.FC<Props> = ({ children }) => {

    /*-------states that will be passed as value to ContextProvider-----*/
    // data based on value that is passed in search form --- Home page
    const [dishes, setDishes] = useState<{ dataDishes: any[], loadingDishes: boolean }>({
        dataDishes: [],
        loadingDishes: true
    });
    // random data --- Home page
    const [randomDishes, setRandomDishes] = useState<{ dataRandom: any[], loadingRandom: boolean }>({
        dataRandom: [],
        loadingRandom: true,
    });

    // favorites page
    const [favorites, setFavorites] = useState<any[]>([]);
    const [savedTitles, setSavedTitles] = useState<string[]>([]);

    // recipe details page
    const [cookNow, setCookNow] = useState<any>({});

    // history page
    const [history, setHistory] = useState<any[]>([]);

    // destructuring 
    const { dataDishes, loadingDishes } = dishes;
    const { dataRandom, loadingRandom } = randomDishes;


    // function to get data based on value that is passed in search form
    const getData = async (name: string) => {
        // set name to localStorage, so when we open app the first time it will display some data
        localStorage.setItem("dish", name);
        const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&number=3&apiKey=${API_KEY}`);
        setDishes({ dataDishes: response.data.results, loadingDishes: false });
    }
    // function to get random data
    const getRandomDishData = async () => {
        const response = await API.get(`recipes/random?number=1&apiKey=${API_KEY}`);
        setRandomDishes({ dataRandom: response.data.recipes, loadingRandom: false })
    }


    // function which add or remove items from favorites onClick
    const handleFavorites = (payload: any) => {
        if (!savedTitles.includes(payload.title)) {
            setFavorites([...favorites, payload]);
            setSavedTitles([...savedTitles, payload.title]);
        } else if (savedTitles.includes(payload.title)) {
            setFavorites(favorites.filter(item => item.title !== payload.title));
            setSavedTitles(savedTitles.filter(savedTitle => savedTitle !== payload.title));
        }
    }

    // get data to recipe details page
    const handleCookNow = (title: string) => {
        let allDishes = [...dataDishes, ...dataRandom];

        setCookNow(allDishes.find(item => item.title === title));
        setHistory([...history, allDishes.find(item => item.title === title)]);
    }

    // function which will remove item from history
    const handleHistory = (title: string) => {
        setHistory(history.filter(item => item.title !== title));
    }

    // call function when component is mounted the first time
    useEffect(() => {
        getData(localStorage.dish);
        // getRandomDishData();
    }, []);





    return (
        <Context.Provider value={{ dataDishes, loadingDishes, dataRandom, loadingRandom, favorites, cookNow, history, getData, handleFavorites, handleCookNow, handleHistory }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;