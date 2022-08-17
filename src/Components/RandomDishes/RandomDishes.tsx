import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SkeletonPlaceholder from '../SkeletonPlaceholder/SkeletonPlaceholder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GiCook } from 'react-icons/gi';
import { HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 481 },
        items: 2
    },
    // tablet: {
    //     breakpoint: { max: 768, min: 481 },
    //     items: 2.5
    // },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1
    }
};


const RandomDishes = () => {
    // use from Context.tsx
    const { dataRandom, loadingRandom, handleCookNow, handleFavorites } = useContext(Context);

    return (
        <div>
            {!loadingRandom ?
                <Carousel responsive={responsive} infinite={true} focusOnSelect={true}>
                    {dataRandom.map(dish =>
                    (<article className='random-card' key={uuidv4()}>
                        <img src={dish.image} alt={dish.title} className='random-card__image' />
                        <aside className='random-card__container'>
                            <h2 className='random-card__title'>{dish.title}</h2>
                            <p className='random-card__text'>
                                {dish.readyInMinutes}min | {dish.servings} servings
                            </p>
                            <div className='random-card__btns'>
                                <Link to={'/recipeDetails'}><button className='random-card__btn' onClick={() => handleCookNow(dish.title)}>Cook <i className='random-card__icon'><GiCook /></i></button></Link>
                                <button className='random-card__btn' onClick={() => handleFavorites(dish)}>Add <i className='random-card__icon'><HiHeart /></i></button>
                            </div>
                        </aside>
                    </article>)
                    )}
                </Carousel>
                : <SkeletonPlaceholder number={3} />}
        </div>
    );
}

export default RandomDishes;