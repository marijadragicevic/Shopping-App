import React, { useEffect, useState } from 'react';
import { API } from '../../Config/api';
import { API_KEY } from '../../Config/apiKey';
import { v4 as uuidv4 } from 'uuid';
import SkeletonPlaceholder from '../SkeletonPlaceholder/SkeletonPlaceholder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GiCook } from 'react-icons/gi';
import { HiHeart } from 'react-icons/hi';

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

type Initial = {
    data: any[],
    loading: boolean
}

const RandomDishes = () => {
    const [randomDishes, setRandomDishes] = useState<Initial>({
        data: [],
        loading: true,
    });

    const { data, loading } = randomDishes

    // For Random recepies
    const getRandomDishData = async () => {
        const response = await API.get(`recipes/random?number=6&apiKey=${API_KEY}`);
        setRandomDishes({ data: response.data.recipes, loading: false })
        console.log(response.data);
    }

    useEffect(() => {
        getRandomDishData();
    }, [])


    return (
        <div>
            {!loading ?
                <Carousel responsive={responsive} infinite={true} focusOnSelect={true}>
                    {data.map(dish =>
                    (<article className='random-card' key={uuidv4()}>
                        <img src={dish.image} alt={dish.title} className='random-card__image' />
                        <aside className='random-card__container'>
                            <h2 className='random-card__title'>{dish.title}</h2>
                            <p className='random-card__text'>
                                {dish.readyInMinutes}min | {dish.servings} servings
                            </p>
                            <div className='random-card__btns'>
                                <button className='random-card__btn'>Cook <i className='random-card__icon'><GiCook /></i></button>
                                <button className='random-card__btn'>Add <i className='random-card__icon'><HiHeart /></i></button>
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