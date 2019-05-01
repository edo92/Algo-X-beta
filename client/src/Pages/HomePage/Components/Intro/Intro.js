import React from 'react';
import './assets/CSS/Intro.css';

const Intro = () => {
    return(
        <div id='intro-container' className='col-12 p-0'>
            <div className='col-12'>
                <div id='intro-textfild' className='col-12'>
                    <h3>LineUp Optimizer</h3>
                    <h4>MMA drafting platform with analytics</h4>
                    <div className='row col-12 p-0 pt-3 m-0'>
                        <button id='intro-signup-btn' className='btn btn-primary mx-1 p-2 px-4'> Sign Up </button>
                        <button id='intro-learn-btn' className='btn btn-light mx-1 px-3'> Learn More </button>
                    </div>
                </div>
            </div>
        </div>         
    )
}

export default Intro;