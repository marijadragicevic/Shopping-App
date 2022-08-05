import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>
                <i className=''><AiOutlineHome /></i>
            </Link>
            <Link to='/'>
                <i className=''><HiHeart /></i>
            </Link>

        </nav>
    )
}

export default Navbar;