import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import { API } from '../Config/api';
import { API_KEY } from '../Config/apiKey';
import { useNavigate, useParams } from 'react-router-dom';
import SkeletonPlaceholder from '../Components/SkeletonPlaceholder/SkeletonPlaceholder';
import { HiHeart } from 'react-icons/hi';
import { BsArrowLeft } from 'react-icons/bs';

const RecipeDetails: React.FC = () => {
    const { handleFavorites } = useContext(Context);

    const { title } = useParams();
    const navigate = useNavigate();
    const [cookNow, setCookNow] = useState<{ data: any, loading: boolean }>({
        data: {},
        loading: true
    });
    const [videoID, setVideoID] = useState('');
    const { data, loading } = cookNow;

    const getRecipeDetails = async (name?: string) => {
        const response2 = await API.get(`food/videos/search?apiKey=${API_KEY}&query=${name?.substring(1)}&number=1`);
        setVideoID(response2.data.videos[0].youTubeId);

        const response1 = await API.get(`recipes/complexSearch?query=${name?.substring(1)}&fillIngredients=true&addRecipeInformation=true&maxCalories=5000&number=1&apiKey=${API_KEY}`);
        setCookNow({ data: response1.data.results[0], loading: false });
    }

    const handleBack = () => {
        navigate('/');
    }


    useEffect(() => {
        getRecipeDetails(title);
    }, []);



    return (
        <div className='recipe'>
            {!loading
                ? (<>
                    <header className='recipe__header'>
                        <img src={data.image} className='header__image' alt={data.title} />
                        <i className='header__icon--back' onClick={() => handleBack()}><BsArrowLeft /></i>
                        <article className='header__container'>
                            <h2 className='header__title'>{data.title}</h2>
                            <i className='header__icon' onClick={() => handleFavorites(data)}><HiHeart /></i>
                        </article>
                    </header>

                    <section className='recipe__details'>
                        <form className='recipe__details__form'>
                            <h3 className='form__title'>Ingredients</h3>
                            {data.extendedIngredients.map((item: { original: string }) =>
                                <label className='form__label' key={uuidv4()}><input type='checkbox' className='form__checkbox' />{item.original}</label>
                            )}
                        </form>
                        <form className='recipe__details__form'>
                            <h3 className='form__title'>Instructions</h3>
                            {data.analyzedInstructions[0].steps.map((item: { step: string }) =>
                                <label className='form__label' key={uuidv4()}><input type='checkbox' className='form__checkbox' />{item.step}</label>
                            )}
                        </form>
                        <article className='recipe__details__video'>
                            <h3 className='video__title'>Video</h3>
                            <iframe className='video__iframe' src={`https://www.youtube.com/embed/${videoID}`}></iframe>
                        </article>
                    </section>

                    <section className='recipe__inf'>
                        <p className='recipe__inf__text'>Total Time: {data.readyInMinutes} MIN</p>
                        <p className='recipe__inf__text'>Servings: {data.servings} Person </p>
                    </section>
                </>)
                : <SkeletonPlaceholder number={3} />}
        </div>
    );
}

export default RecipeDetails;