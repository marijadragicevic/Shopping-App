import React, { useEffect, useRef } from 'react';
import DishItem from './DishItem';
import '../../Style/Components/Dishes.scss';

const DishesList: React.FC<{ data: any[] }> = ({ data }) => {
    const el = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            console.log(entries);
        },);

        // observer.observe(el?.current?.lastChild);

        // console.log(el);

    }, [el]);


    return (
        <div className='cards' ref={el}>
            {data.length !== 0 ?
                data.map(item => <DishItem dish={item} key={item.id} />)
                : "no recepies"}
        </div>
    );
}

export default DishesList;