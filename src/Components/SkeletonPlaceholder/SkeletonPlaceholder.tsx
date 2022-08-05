import React from 'react';
// import Carousel from 'react-multi-carousel';


const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 480 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1
    }
};



const SkeletonPlaceholder: React.FC<{ number: number }> = ({ number }) => {

    return (
        <div className='skeleton-container'>
            {/* <Carousel responsive={responsive} infinite={true} focusOnSelect={true}> */}
            {Array.from(Array(number).keys()).map((el, index) =>
            (<div className='skeleton' key={index}>
                <div className='skeleton__img'></div>
                <div>
                    <p className='skeleton__title'></p>
                    <p className='skeleton__text'></p>
                    <div className='skeleton__icons'>
                        <p className='skeleton__icon'></p>
                        <p className='skeleton__icon'></p>
                    </div>
                </div>
            </div>)
            )}
            {/* </Carousel> */}
        </div>
    )
}

export default SkeletonPlaceholder;