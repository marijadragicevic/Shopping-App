import React, { useEffect, useState } from 'react';
import { API } from '../../Config/api';
import { API_KEY } from '../../Config/apiKey';
import { v4 as uuidv4 } from 'uuid';
import SkeletonPlaceholder from '../SkeletonPlaceholder/SkeletonPlaceholder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    // desktop: {
    //     breakpoint: { max: 4000, min: 480 },
    //     items: 3
    // },
    // tablet: {
    //     breakpoint: { max: 768, min: 480 },
    //     items: 2
    // },
    mobile: {
        breakpoint: { max: 4800, min: 0 },
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
                    (<article className='card' key={uuidv4()}>

                        <img src={dish.image} alt={dish.title} className='card__image' />

                        <aside className='card__container'>
                            <h2 className='card__title'>{dish.title}</h2>
                            <p className='card__text'>
                                {/* {dish.readyInMinutes}min | {dish.servings} servings | {Math.ceil(dish.nutrition.nutrients[0].amount)}kcal */}
                            </p>

                            <div className='card__icons'>
                                {/* <i className='card__icon--cook'><GiCook /></i> */}
                                {/* <i className='card__icon--add'><HiHeart /></i> */}
                            </div>

                        </aside>
                    </article>)
                    )}
                </Carousel>
                // <DishesList data={data} />
                : <SkeletonPlaceholder number={1} />}
        </div>
    );
}

export default RandomDishes;