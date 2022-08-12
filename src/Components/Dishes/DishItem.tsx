import React from 'react';
import { GiCook } from 'react-icons/gi';
import { HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const DishItem: React.FC<{ dish: any }> = ({ dish }) => {

    return (
        <article className='card'>

            <article className='card__container1'>
                <img src={dish.image} alt={dish.title} className='card__image' />
                <div className='card__icons'>
                    <i className='card__icon card__icon--save'><HiHeart /></i>
                    <Link to={'/recipeDetails'}>  <i className='card__icon card__icon--info'><GiCook /></i></Link>

                </div>
            </article>

            <aside className='card__container2'>
                <h2 className='card__title'>{dish.title}</h2>
                <p className='card__text'>
                    {dish.readyInMinutes}min | {dish.servings} servings | {Math.ceil(dish.nutrition.nutrients[0].amount)}kcal
                </p>


            </aside>
        </article>
    )
}

export default DishItem;