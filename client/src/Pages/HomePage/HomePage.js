import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './assets/CSS/HomePage.css';

import Intro from './Components/Intro/Intro';
import BasicInfo from './Components/BasicInfo/BasicInfo';
import BottomInfo from './Components/BottomInfo/BottomInfo';

const HomePage = () => {
    return(
        <div className='col-12 p-0 ov-hidden'>
            <Header/>

            <Intro/>

            <BasicInfo/>

            <BottomInfo/>
            
            <Footer/>
        </div>
    )
};

export default HomePage;