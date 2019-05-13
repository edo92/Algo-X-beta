import React from 'react';

import { Divider } from 'antd';
import './assets/CSS/EventsInfo.css';
import EventStats from './Components/EventStats/EventStats';
import FightersStats from './Components/FighterStats/FightersStats';
import AnalizedStats from './Components/Analized/AnalizedStats';

const EventInfo = () => {
    return(
        <div id='past-stats-container' className='col-12 p-0'>
            <ul className='row col-12 p-0 m-0 list-none hidden-md'>
                <li className='col-4 p-2'>
                    <div className='col-12 p-0 container-style'>
                        <div className='col-12 p-1'>
                            <div className='col-12 p-1'>
                                <p className='font-w-600 m-0 pb-1'>Events Stats</p>
                                <Divider className='m-0 my-1'/>  
                            </div>
                            <div className='col-12 p-0'>
                                <EventStats/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='col-4 p-2'>
                    <div className='col-12 p-0 container-style'>
                        <div className='col-12 p-1'>
                            <div className='col-12 p-1'>
                                <p className='font-w-600 m-0 pb-1'>Fighter Stats</p>
                                <Divider className='m-0 my-1'/>  
                            </div>
                            <div className='col-12 p-0'>
                                <FightersStats/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='col-4 p-2'>
                    <div className='col-12 p-0 container-style'>
                        <div className='col-12 p-1'>
                            <div className='col-12 p-1'>
                                <p className='font-w-600 m-0 pb-1'>Analized Stats</p>
                                <Divider className='m-0 my-1'/>  
                            </div>
                            <div className='col-12 p-0'>
                                <AnalizedStats/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className='row col-12 p-0 m-0 list-none visible-md'>
                <div className='col-12 p-2'>
                    <div className='col-12 p-0 container-style ov-hidden'>
                        <div className='col-12 p-2'>
                            <div className='col-12 p-1'>
                                <p className='font-w-600 m-0 pb-1'>Event Statistics</p>
                                <Divider className='m-0 my-1'/> 
                            </div>
                            <div className='col-12 p-0'>
                                <ul className='row col-12 m-0 p-0 list-none'>
                                    <li className='col-4 p-2'>
                                        <div className='col-12 p-3 vertic-div'>
                                            <EventStats/>
                                        </div>
                                    </li>
                                    <li className='col-4 p-2'>
                                        <div className='col-12 p-3 vertic-div'>
                                            <FightersStats/>
                                        </div>
                                    </li>
                                    <li className='col-4 p-2'>
                                        <div className='col-12 p-3'>
                                            <AnalizedStats/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default EventInfo;