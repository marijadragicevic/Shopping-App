import React, { useRef, useEffect, useState, useContext, useCallback } from 'react';
import DishItem from './DishItem';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../Context/Context';
import SkeletonPlaceholder from '../SkeletonPlaceholder/SkeletonPlaceholder';

const DishesList: React.FC<{ data: any[] }> = ({ data }) => {

    // array for infinitive scroll implementation
    const [newData, setNewData] = useState<any[]>([data[0], data[1], data[2]]);
    const [loading1, setLoading1] = useState(true);


    // get reference
    const container = useRef<HTMLDivElement | null>(null);
    const end = useRef<HTMLDivElement | null>(null);

    const handleInfinitiveScroll = () => {
        let array = data.filter((item, index) => index >= newData.length && index < newData.length + 2)
        setNewData([...newData, ...array]);
    }


    // NE RADI; treba da se observer.unobserve namesti za kartice
    // useEffect(() => {

    // const observer = new IntersectionObserver((entries) => {
    //     entries.map((entry) => {
    //         if (entry.intersectionRatio > 0.0) {
    //             console.log(entry);
    //             handleInfinitiveScroll();
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, { threshold: 0.5, });

    // observer.observe(container?.current?.lastChild as Element);


    // ne radi
    // const observe2 = new IntersectionObserver((entries) => {
    //     entries.map((entry) => {
    //         if (entry.intersectionRatio > 0.0) {
    //             observer.unobserve(container?.current?.lastChild as Element);
    //         }
    //     });
    // }, { threshold: 1 })

    // observe2.observe(end?.current as Element)

    // }, [newData]);

    useEffect(() => {
        setNewData([data[0], data[1], data[2]]);
    }, [data]);



    return (
        <>
            <div className='cards' ref={container} >
                {newData.length > 0 ?
                    newData.map(item => <DishItem dish={item} key={uuidv4()} />)
                    : <SkeletonPlaceholder number={6} />}
            </div>

            <div className='home__end' ref={end}></div>
        </>
    );
}

export default DishesList;
