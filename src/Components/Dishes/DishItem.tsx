import React from 'react';
import { GiCook } from 'react-icons/gi';
import { HiHeart } from 'react-icons/hi';


const DishItem: React.FC<{ dish: any }> = ({ dish }) => {

    return (
        <article className='card'>

            <img src={dish.image} alt={dish.title} className='card__image' />

            <aside className='card__container'>
                <h2 className='card__title'>{dish.title}</h2>
                <p className='card__text'>
                    {dish.readyInMinutes}min | {dish.servings} servings | {Math.ceil(dish.nutrition.nutrients[0].amount)}kcal
                </p>

                <div className='card__icons'>
                    <i className='card__icon--cook'><GiCook /></i>
                    <i className='card__icon--add'><HiHeart /></i>
                </div>

            </aside>
        </article>
    )
}

export default DishItem;