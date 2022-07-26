import React, { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import '../../Style/Components/TopButton.scss';


const TopButton: React.FC = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            (window.scrollY > 400) ? setShowBtn(true) : setShowBtn(false);
        });
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (<i className={showBtn ? 'icon show' : 'icon hide'} onClick={() => handleScrollToTop()}><BsChevronUp /></i>);
}

export default TopButton;