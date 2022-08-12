import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';
import { BsClockHistory } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to='/' className='navbar__link'>
                    <AiOutlineHome className='navbar__icon' />
                    <p className='navbar__text'>Home</p>
                </Link>

                <Link to='#form' className='navbar__link'>
                    <AiOutlineSearch className='navbar__icon' />
                    <p className='navbar__text'>Search</p>
                </Link>

                <Link to='/favorites' className='navbar__link'>
                    <HiHeart className='navbar__icon' />
                    <p className='navbar__text'>Favorites</p>
                </Link>

                <Link to='/history' className='navbar__link'>
                    <BsClockHistory className='navbar__icon' />
                    <p className='navbar__text'>History</p>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar;