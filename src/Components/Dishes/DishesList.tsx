import React,{useRef,useLayoutEffect} from 'react';
import DishItem from './DishItem';
import { v4 as uuidv4 } from 'uuid';

const DishesList: React.FC<{ data: any[] }> = ({ data }) => {

    const els=useRef<HTMLDivElement>(null);

    
    return (
        <div className='cards' ref={els} >
            {data.length !== 0 ?
                data.map(item => <DishItem dish={item} key={uuidv4()} />)
                : "no recepies"}
        </div>
    );
}

export default DishesList;


// useEffect(() => {
                // const el = document.querySelector('.cards .card:last-child');
            
                // const observer = new IntersectionObserver(entries => {
                //     console.log(entries);
                // },);
            
                // observer.observe(el)!;
            
                // console.log(el.current?.lastChild);
                // console.log(el);
            
                // }, []);
