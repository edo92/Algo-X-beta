import React from 'react';
import './assets/CSS/BottomInfo.css';

const BottomInfo = () => {
    return(
        <div className='col-12 p-0'>
            <div id='bottomInfo-container' className='col-12 p-0 bg-light'>
                <div id='bottomInfo-title' className='col-12'>
                    <h1 className='text-center'>Accuracy</h1>
                </div>
                <div id='info-box' className='col-12 p-0'>
                    <ul className='row col-12 m-0 px-3 list-none'>
                        <li className='col-12 col-md-4 p-2' >
                            <ul className='col-12 p-0 list-none bg-light info-card'>
                            
                            </ul>
                        </li>
                        <li className='col-12 col-md-4 p-2' >
                            <ul className='col-12 p-0 list-none bg-light info-card'>
                                
                            </ul>
                        </li>
                        <li className='col-12 col-md-4 p-2' >
                            <ul className='col-12 p-0 list-none bg-light info-card'>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> 
            <div id='button-cover' className='col-12 p-0 bg-light'>

            </div>
        </div>
    )
}

export default BottomInfo;