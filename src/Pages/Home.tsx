import React, { useState, useEffect } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import SearchForm from '../Components/Search/SearchForm';
import { API } from '../Config/api';
import { API_KEY } from '../Config/apiKey';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);


    const getData = async (name: string) => {
        const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&apiKey=${API_KEY}`);
        setData(response.data.results);
        setLoading(false);
        localStorage.setItem("dish", name);
    }

    useEffect(() => {
        getData(localStorage.dish);
    }, []);

    console.log(data);

    return (
        <div className='home'>
            <SearchForm getData={getData} />
            {!loading ? <DishesList data={data} /> : "skeletonPlacehoolder"}
        </div>
    );
}

export default Home;