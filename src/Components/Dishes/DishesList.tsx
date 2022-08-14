import React, { useRef, useLayoutEffect, useEffect, useState, useContext } from 'react';
import DishItem from './DishItem';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../Context/Context';
import SkeletonPlaceholder from '../SkeletonPlaceholder/SkeletonPlaceholder';

const DishesList: React.FC<{ data: any[] }> = ({ data }) => {

    // array for infinitive scroll implementation
    const [newData, setNewData] = useState<any[]>([data[0], data[1], data[2]]);
    const [loading, setLoading] = useState(true);

    // get reference
    const container = useRef<HTMLDivElement | null>(null);

    const handleInfinitiveScroll = () => {
        let array = data.filter((item, index) => index > newData.length && index < newData.length + 3)
        setNewData([...newData, ...array]);
    }
    useEffect(() => {
        setNewData([data[0], data[1], data[2]]);
        setLoading(true);
    }, [data]);

    /*
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.map((entry) => {
                if (entry.intersectionRatio > 0.0) {
                    console.log(entry);
                    handleInfinitiveScroll();
                    setLoading(false);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 1, });


        if (newData.length < data.length) {
            observer.observe(container?.current?.lastChild as Element);
        } else {
            observer.unobserve(container?.current?.lastChild as Element);

        }

    }, [newData]);*/


    return (
        <div className='cards' ref={container} >
            {!loading ?
                newData.map(item => <DishItem dish={item} key={uuidv4()} />)
                : <SkeletonPlaceholder number={6} />}
        </div>
    );
}

export default DishesList;
