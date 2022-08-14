import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { BsClockHistory } from 'react-icons/bs';

const Navbar = () => {
    const [icons, setIcons] = useState({
        one: true,
        two: false,
        three: false
    });
    const { one, two, three } = icons;


    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to='/' className={one ? 'navbar__link active' : 'navbar__link'} onClick={() => setIcons({ one: true, two: false, three: false })}>
                    {one ? <AiFillHome className='navbar__icon' /> : <AiOutlineHome className='navbar__icon' />}
                    <span className='navbar__text'>Home</span>
                </Link>

                {/* izbaciti search iz navbara */}
                <a href='#form' className='navbar__link'>
                    <AiOutlineSearch className='navbar__icon' />
                    <span className='navbar__text'>Search</span>
                </a>

                <Link to='/favorites' className={two ? 'navbar__link active' : 'navbar__link'} onClick={() => setIcons({ one: false, two: true, three: false })}>
                    {two ? <HiHeart className='navbar__icon' /> : <HiOutlineHeart className='navbar__icon' />}
                    <span className='navbar__text'>Favorites</span>
                </Link>

                <Link to='/history' className={three ? 'navbar__link active' : 'navbar__link'} onClick={() => setIcons({ one: false, two: false, three: true })}>
                    <BsClockHistory className='navbar__icon' />
                    <span className='navbar__text'>History</span>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar;