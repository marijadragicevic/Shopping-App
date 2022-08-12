import React, { useContext } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import RandomDishes from '../Components/RandomDishes/RandomDishes';
import TopButton from '../Components/ScrollToTopButton/TopButton';
import SearchForm from '../Components/Search/SearchForm';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { Context } from '../Context/Context';

const Home = () => {
    const { data, loading } = useContext(Context);

    return (
        <div className='home'>
            <SearchForm />
            <RandomDishes />
            <TopButton />
            {/* <button onClick={() => getData(localStorage.dish)}>get more results</button> */}
            {!loading ? <DishesList data={data} /> : <SkeletonPlaceholder number={9} />}
        </div>
    );
}



export default Home;

