import React from 'react';


const SkeletonPlaceholder: React.FC<{ number: number }> = ({ number }) => {

    return (
        <div className='skeleton-container'>
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
        </div>
    )
}

export default SkeletonPlaceholder;