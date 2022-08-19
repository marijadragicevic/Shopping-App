import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import { API } from '../Config/api';
import { API_KEY } from '../Config/apiKey';
import { useParams } from 'react-router-dom';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';

const RecipeDetails: React.FC = () => {
    const { title } = useParams();
    const [cookNow, setCookNow] = useState<{ data: any, loading: boolean }>({
        data: {},
        loading: true
    });
    // rename it to videoID ?
    const [videoInfo, setVideoInfo] = useState('');
    const { data, loading } = cookNow;

    const getRecipeDetails = async (name?: string) => {
        const response = await API.get(`recipes/complexSearch?query=${name?.substring(1)}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&number=1&apiKey=${API_KEY}`);
        setCookNow({ data: response.data.results[0], loading: false });
        // console.log(response);

        const response1 = await API.get(`food/videos/search?apiKey=${API_KEY}&query=${name?.substring(1)}}&numbre=1 `);
        // setVideoInfo();
        console.log(response1);

    }


    useEffect(() => {
        getRecipeDetails(title);
    }, []);



    return (
        <div className='recipe-details'>
            {!loading
                ? (<>
                    <header className='header' /*style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0.2)),url(${cookNow.image})` }}*/>
                        <img src={data.image} className='header__image' alt={data.title} />
                        <article className='header__container'>
                            <h2 className='header__title'>Let's make {data.title}!</h2>
                            <p className='header__text'>{data.readyInMinutes} min | {data.servings} servings</p>
                        </article>
                    </header>

                    <section className='recipe'>
                        <form className='recipe__form'>
                            <h3 className='form__title'>Ingredients to make this meal:</h3>
                            {data.extendedIngredients.map((item: { original: string, nameClean: string }) =>
                                <label className='form__label' key={uuidv4()}><input type='checkbox' className='form__checkbox' />{item.original}/ {item.nameClean}</label>
                            )}
                        </form>
                        <form className='recipe__form'>
                            <h3 className='form__title'>Instruction to make this meal:</h3>
                            {data.analyzedInstructions[0].steps.map((item: { step: string }) =>
                                <label className='form__label' key={uuidv4()}><input type='checkbox' className='form__checkbox' />{item.step}</label>
                            )}
                        </form>

                        {/* change ID to videoInfo paramentar */}
                        <iframe className='recipe__video' src={`https://www.youtube.com/embed/ID`}></iframe>
                    </section>
                </>)
                : <SkeletonPlaceholder number={3} />}
        </div>
    );
}

export default RecipeDetails;