import React, { useState, useEffect, useRef } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import TopButton from '../Components/ScrollToTopButton/TopButton';
import SearchForm from '../Components/Search/SearchForm';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { API } from '../Config/api';
import { API_KEY } from '../Config/apiKey';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [offset, setOffset] = useState(0);


    // potreban je API poziv koji dobija sve podatke koji kasnije trebaju da se filtriraju
    // API poziv za implementaciju infinite scroll-a
    // napraviti custome hook
    // uslovi nisu dobri ne stize da se offset restartuje
    const getData = async (name: string) => {

        if (name === localStorage.dish && offset / 100 <= Math.ceil(totalResults / 100)) {
            setOffset(offset + 5);
            const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&offset=${offset}&number=5&apiKey=${API_KEY}`);
            setData([...data, ...response.data.results]);
            setTotalResults(response.data.totalResults);
        } else if (name !== localStorage.dish && offset / 100 <= Math.ceil(totalResults / 100)) {
            setOffset(0);
            const response = await API.get(`recipes/complexSearch?query=${name}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&offset=${offset}&number=5&apiKey=${API_KEY}`);
            setData(response.data.results);
            setTotalResults(response.data.totalResults);
        } else if (offset / 100 >= Math.ceil(totalResults / 100)) {
            setOffset(0);
            setData([]);
        }
        setLoading(false);
        localStorage.setItem("dish", name);

    }

    useEffect(() => {
        getData(localStorage.dish);

    }, []);
    // console.log(response);
    console.log(data);
    console.log(offset);
    console.log(totalResults);


    return (
        <div className='home'>
            <SearchForm getData={getData} />
            <button onClick={() => getData(localStorage.dish)}>get more results</button>
            {!loading ? <DishesList data={data} /> : <SkeletonPlaceholder number={5} />}
            <TopButton />
        </div>
    );
}


export default Home;