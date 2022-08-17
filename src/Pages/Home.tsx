import React, { useContext } from 'react';
import DishesList from '../Components/Dishes/DishesList';
import RandomDishes from '../Components/RandomDishes/RandomDishes';
import TopButton from '../Components/ScrollToTopButton/TopButton';
import SearchForm from '../Components/Search/SearchForm';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { Context } from '../Context/Context';

const Home = () => {
    // use from Context.tsx
    const { dataDishes, loadingDishes } = useContext(Context);

    return (
        <div className='home'>
            <SearchForm />
            <RandomDishes />
            <TopButton />
            {!loadingDishes && dataDishes.length !== 0
                ? <DishesList data={dataDishes} />
                : !loadingDishes && dataDishes.length === 0 ? "NO DATA"
                    : <SkeletonPlaceholder number={9} />}
        </div>
    );
}



export default Home;

