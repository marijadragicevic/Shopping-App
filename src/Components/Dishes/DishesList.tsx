import React from 'react';
import DishItem from './DishItem';
import '../../Style/Components/Dishes.scss';
import { v4 as uuidv4 } from 'uuid';

const DishesList: React.FC<{ data: any[] }> = ({ data }) => {


    // useEffect(() => {
    // const el = document.querySelector('.cards .card:last-child');

    // const observer = new IntersectionObserver(entries => {
    //     console.log(entries);
    // },);

    // observer.observe(el)!;

    // console.log(el.current?.lastChild);
    // console.log(el);

    // }, []);


    return (
        <div className='cards' >
            {data.length !== 0 ?
                data.map(item => <DishItem dish={item} key={uuidv4()} />)
                : "no recepies"}
        </div>
    );
}

export default DishesList;