import React, { useEffect, useState } from 'react';
import { API } from '../../Config/api';
import { API_KEY } from '../../Config/apiKey';
import DishesList from '../Dishes/DishesList';
import SkeletonPlaceholder from '../SkeletonPlaceholder/SkeletonPlaceholder';

type State = {
    data: any[],
    loading: boolean
}

const RandomDishes = () => {
    const [randomDishes, setRandomDishes] = useState<State>({
        data: [],
        loading: true,
    });

    const { data, loading } = randomDishes

    // For Random recepies
    const a = async () => {
        const response = await API.get(`recipes/random?number=6&apiKey=${API_KEY}`);
        setRandomDishes({ data: response.data.recipes, loading: false })
        console.log(response.data);
    }

    useEffect(() => {
        // a();
    }, [])


    return (
        <div>
            {!loading ? <DishesList data={data} /> : <SkeletonPlaceholder number={3} />}
        </div>
    );
}

export default RandomDishes;