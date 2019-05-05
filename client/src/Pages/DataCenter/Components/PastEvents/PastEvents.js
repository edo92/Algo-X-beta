import React from 'react';
import { Divider, Alert } from 'antd';
import './assets/CSS/PastEvent.css';
import PastEventsList from './Components/PastEventsList/PastEventsList';
import EventFightersList from './Components/FightersList/FightersList';
 
const PastEvent = props => {
    let errorMessage = props.errorOccured;
    return(
        <div className='col-12 p-0'>
            { errorMessage ? 
            <div id='alert-cont' className='col-12 pt-3'>
                <Alert message="Info Text" type="error" closeText="Close Now" />
            </div> : null } 
            <div className='row col-12 m-0 p-1 justify-content-center'>
                <ul id='stats-dash' className='row col-12 p-0 m-0 list-none' style={{height:'150px'}}>
                    <li className='col-4 p-0'>
                        <div className='col-12 p-1 container-style'>
                                
                        </div>
                    </li>
                    <li className='col-4 p-0'>
                        <div className='col-12 p-1 container-style'>
                            
                        </div>
                    </li>
                    <li className='col-4 p-0'>
                        <div className='col-12 p-1 container-style'>
                        
                        </div>
                    </li>
                </ul>
            </div>
            <div id='content-body' className='row col-12 p-2 m-0 pt-3 mt-3 justify-content-center'>
                <div className='col-12 col-md-5 p-0 mr-2 container-style'>
                    <div className='col-12'>
                        <div className='col-12 p-0'>
                            <p className='m-0 p-2 m-1 font-w-700'>Past Events</p>
                        </div>
                        <Divider className='mt-0 mb-3'/>
                        <PastEventsList/>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-0 container-style'>
                    <div id='fighter-list-cont' className='col-12'>
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

