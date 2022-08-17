import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = () => {
    const { cookNow } = useContext(Context);
    console.log(cookNow);

    return (
        <div className='recipe-details'>
            <header className='header' style={{ backgroundImage: `url(${cookNow.image})` }}>
                {/* <img src={cookNow.image} className='header__image' alt={cookNow.title} /> */}
                {/* <article className='header__container'> */}
                <h2 className='header__title'>Let's make {cookNow.title}!</h2>
                <p className='header__text'>{cookNow.readyInMinutes} min | {cookNow.servings} servings</p>
                {/* </article> */}
            </header>

            <section className='recipe'>
                <form className='recipe__form'>
                    <h3 className='form__title'>Ingredients to make this meal:</h3>
                    {cookNow.extendedIngredients.map((item: { original: string, nameClean: string }) =>
                        <label className='form__label' key={uuidv4()}><input type='checkbox' className='form__checkbox' />{item.original}/ {item.nameClean}</label>
                    )}
                </form>
                <form className='recipe__form'>
                    <h3 className='form__title'>Instruction to make this meal:</h3>
                    {cookNow.analyzedInstructions[0].steps.map((item: { step: string }) =>
                        <label className='form__label' key={uuidv4()}><input type='checkbox' className='form__checkbox' />{item.step}</label>
                    )}
                </form>

                {/* API fro video */}
                {/* API.get(`food/videos/search?apiKey=${API_KEY}&query=${cookNow.title}&numbre=1 `);*/}
            </section>
        </div>
    );
}

export default RecipeDetails;