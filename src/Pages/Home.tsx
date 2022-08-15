import React, { useContext } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import RandomDishes from '../Components/RandomDishes/RandomDishes';
import TopButton from '../Components/ScrollToTopButton/TopButton';
import SearchForm from '../Components/Search/SearchForm';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { Context } from '../Context/Context';

const Home = () => {
    // use from Context.tsx
    const { data, loading } = useContext(Context);

    return (
        <div className='home' style={{ marginTop: '1500px' }}>
            <SearchForm />
            <RandomDishes />
            <TopButton />
            {/* <button onClick={() => getData(localStorage.dish)}>get more results</button> */}
            {!loading && data.length !== 0
                ? <DishesList data={data} />
                : !loading && data.length === 0 ? "NO DATA"
                    : <SkeletonPlaceholder number={9} />}
        </div>
    );
}



export default Home;

