import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to='/' className='navbar__link'>
                    <i className='navbar__icon'><AiOutlineHome /></i>
                </Link>

                <Link to='/' className='navbar__link'>
                    <i className='navbar__icon'><AiOutlineSearch /></i>
                </Link>

                <Link to='/' className='navbar__link'>
                    <i className='navbar__icon'><HiHeart /></i>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar;