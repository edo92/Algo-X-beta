import React from 'react';
import { Divider } from 'antd';
import './assets/CSS/PastEvent.css';

import PastEventsList from './Components/PastEventsList/PastEventsList';
import EventFightersList from './Components/FightersList/FightersList';
import EventInfo from './Components/EvnetsBasicInfo/EventsInfo';
import ErrorMessage from '../../../../Components/ErrorMessage/ErrorMessage';

const PastEvent = props => {
    let errorMessage = props.errorOccured;

    return(
        <div className='col-12 p-1'>
            <div className='row col-12 m-0 p-0 justify-content-center'>
                <ul className='col-12 p-0 m-0 list-none'>
                    <li className='col-12 p-0'>
                        <ErrorMessage message={ errorMessage }/>
                    </li>
                    <li className='col-12 p-0'>
                        <EventInfo/>
                    </li>
                </ul>
            </div>
            
            <div className='col-12 p-1'>
                <div id='content-body' className='row col-12 p-1 m-0'>
                    <div className='col-12 col-md-6 p-1'>
                        <ul className='col-12 p-0 container-style list-none'>
                            <li className='col-12 p-0'>
                                <div className='col-12 p-2'>
                                    <p className='mb-2 p-2 font-w-700'>Past Events</p>
                                    <Divider className='mt-0 mb-1'/>
                                </div>
                            </li>
                            <li className='col-12 p-0'>
                                <PastEventsList/>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 p-1'>
                        <ul className='col-12 p-0 container-style list-none'>
                            <li className='col-12 p-0'>
                                <div className='col-12 p-2'>
                                    <p className='mb-2 p-2 font-w-700'>Fighters</p>
                                    <Divider className='mt-0 mb-1'/>
                                </div>
                            </li>
                            <li className='col-12 p-0'>
                                <EventFightersList/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>             
    )
}

export default React.memo( PastEvent );

