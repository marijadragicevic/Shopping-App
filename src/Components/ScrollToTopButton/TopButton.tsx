import React, { useEffect, useState } from 'react';
import { BsChevronUp, BsWindowSidebar } from 'react-icons/bs';


const TopButton: React.FC = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (<i onClick={() => handleScrollToTop()}><BsChevronUp /></i>);
}

export default TopButton;