import React from 'react';
import { Divider, Alert } from 'antd';
import './assets/CSS/PastEvent.css';
import PastEventsList from './Components/PastEventsList/PastEventsList';

const PastEvent = props => {

    return(
        <div className='col-12 p-0'>
            { props.errorOccured ? 
            <div id='alert-cont' className='col-12 pt-3'>
                <Alert message="Info Text" type="error" closeText="Close Now" />
            </div> : null } 
            <div id='content-body' className='row col-12 p-2 m-0 pt-3 mt-3 justify-content-center'>
                <div id='dc-container' className='col-12 col-md-5 p-0 mr-2 container-style'>
                    <div className='col-12 event-list-cont'>
                        <div className='col-12 p-0'>
                            <p className='m-0 p-2 m-1 font-w-700'>Past Events</p>
                        </div>
                        <Divider className='mt-0 mb-3'/>
                        <PastEventsList/>
                    </div>
                </div>
                <div id='dc-container' className='col-12 col-md-6 p-0 container-style'>
                    <div id='fighter-list-cont' className='col-12'>
                        <div className='col-12 p-0'>
                            <p className='m-0 p-2 m-1 font-w-700'>Fighters</p>
                        </div>
                        <Divider className='mt-0 mb-3'/>
                    
                    </div>
                </div>
            </div>
            <div className='row col-12 m-0 p-1 justify-content-center'>
                <div className='col-11 p-0 container-style' style={{height:'220px'}}>
                    
                </div>
            </div>
        </div>             
    )
}

export default PastEvent;

