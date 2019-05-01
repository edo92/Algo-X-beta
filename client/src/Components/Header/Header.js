import React from 'react';

import '../Header/CSS/Header.css';

import SignUpButton from './Components/SignUpButton/SignUpButton';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';

const Header = () => {
    return(
        <nav id='advencSubNuv' className='col-12 p-0'>
            <ul className='row col-12 pt-1 m-0 list-none'>
                <li className='row col-5 pr-0'>
                    <HamburgerMenu/>
                </li>
                <li id='MainLogo' className='col-3 p-0'>
                    <h3  className='advNav-font-resp pt-2 ml-4 logo-style'>Algo X</h3>
                </li>

                <li className='col-4 p-0 ml-4'>
                    <SignUpButton/>
                </li>
            </ul>
        </nav>
    )     
} 

export default Header;