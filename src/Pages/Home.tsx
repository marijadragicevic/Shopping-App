import { off } from 'process';
import React, { useState, useEffect } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import SearchForm from '../Components/Search/SearchForm';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { API } from '../Config/api';
import { API_KEY } from '../Config/apiKey';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);


    const getData = async (name: string) => {
        const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&offset=0&apiKey=${API_KEY}`);
        setOffset(offset + 10);
        setData(response.data.results);

        console.log(response);

        setLoading(false);
        localStorage.setItem("dish", name);
    }

    // useEffect(() => {
    //     getData(localStorage.dish);
    // }, []);

    // console.log(data);
    console.log(offset);


    return (
        <div className='home'>
            <SearchForm getData={getData} />
            {/* <button onClick={() => getData(localStorage.dish)}>get more results</button> */}
            {!loading ? <DishesList data={data} /> : <SkeletonPlaceholder number={5} />}
        </div>
    );
}

export default Home;