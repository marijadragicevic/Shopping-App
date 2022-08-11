import React, { useState, useEffect } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import RandomDishes from '../Components/RandomDishes/RandomDishes';
import TopButton from '../Components/ScrollToTopButton/TopButton';
import SearchForm from '../Components/Search/SearchForm';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { API } from '../Config/api';
import { API_KEY } from '../Config/apiKey';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);


    const getData = async (name: string) => {

        localStorage.setItem("dish", name);
        const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&number=9&apiKey=${API_KEY}`);
        setData(response.data.results);
        setLoading(false);

    }

    useEffect(() => {
        getData(localStorage.dish);
    }, []);

    return (
        <div className='home'>
            <SearchForm getData={getData} />
            <RandomDishes />
            <TopButton />
            {/* <button onClick={() => getData(localStorage.dish)}>get more results</button> */}
            {!loading ? <DishesList data={data} /> : <SkeletonPlaceholder number={9} />}
        </div>
    );
}



export default Home;
// const [totalResults, setTotalResults] = useState(0);
// const [offset, setOffset] = useState(0);


// potreban je API poziv koji dobija sve podatke koji kasnije trebaju da se filtriraju
// API poziv za implementaciju infinite scroll-a
// napraviti custome hook
// uslovi nisu dobri ne stize da se offset restartuje
// if (name === localStorage.dish && offset / 100 <= Math.ceil(totalResults / 100)) {
    //     // setOffset(offset + 5);
    //     const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&offset=${offset}&number=10&apiKey=${API_KEY}`);
    //     setData([...data, ...response.data.results]);
    //     setTotalResults(response.data.totalResults);
    //     console.log(response);
    // setTotalResults(response.data.totalResults);
    // } else if (name !== localStorage.dish && offset / 100 <= Math.ceil(totalResults / 100)) {
        // setOffset(0);
        // } else if (offset / 100 >= Math.ceil(totalResults / 100)) {
            // setOffset(0);
            // setData([]);
            // }
            // console.log(data);
            // console.log(offset);
            // console.log(totalResults);



