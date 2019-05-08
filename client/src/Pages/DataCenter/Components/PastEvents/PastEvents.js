import React from 'react';
import { Divider, Alert } from 'antd';
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
            <div id='content-body' className='row col-12 m-0 p-0 justify-content-center'>
                <div className='col-12 col-md-6 p-2'>
                    <div className='col-12 p-0 container-style'>
                        <div className='col-12 p-0'>
                            <p className='m-0 p-2 m-1 font-w-700'>Past Events</p>
                        </div>
                        <Divider className='mt-0 mb-3'/>
                        <PastEventsList/>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-2'>
                    <div className='col-12 p-0 container-style'>
                        <div className='col-12 p-0'>
                            <p className='m-0 p-2 m-1 font-w-700'>Fighters</p>
                        </div>
                        <Divider className='mt-0 mb-3'/>
                        <EventFightersList/>
                    </div>
                </div>
            </div>
        </div>             
    )
}

export default PastEvent;

