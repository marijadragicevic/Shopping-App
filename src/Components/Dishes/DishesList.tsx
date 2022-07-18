import React from 'react';
import DishItem from './DishItem';
import '../../Style/Components/Dishes.scss';

const DishesList: React.FC<{ data: any[] }> = ({ data }) => {
    return (
        <div className='cards'>

            {data.length !== 0 ?
                data.map(item => <DishItem dish={item} key={item.id} />)
                : "no recepies"}
        </div>
    );
}

export default DishesList;