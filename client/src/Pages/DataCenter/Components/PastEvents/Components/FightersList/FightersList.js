import React from 'react';
import { connect } from 'react-redux';

import { Progress } from 'antd';
import './assets/CSS/FightersList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';
import MapFighters from './Components/MapFighters';

import { handleInputs, submitEvent } from '../../../../../../Store/Actions/DataCenter/PastEventsActions/index';

const EventFightersList = props => {
    let {
        fighterList, loadingStatus, handleInputs,
        progress, selectedEvent, loadMessage, saveEvent
    } = props;
    let onLoadStyle = loadingStatus ? { opacity:0.4 } : { opacity: 1 };

    return(
        <div className='row col-12 p-0 m-0'>
            <div style={ onLoadStyle } id='fightersList' className='row col-12 p-1 m-0'>
                <MapFighters 
                    fighterList={ fighterList }
                    handleInputs={ handleInputs }
                    loadingList={ loadingStatus }
                />
            </div>
            <div className='col-12 p-0 pt-2 text-center position-absolute'>
                { loadingStatus ? 
                    <ul className='col-12 p-0 list-none'>
                        <li className='col-12'>
                            <LoadingIcon loadMessage={ loadMessage } style={{marginTop:'65px'}}/> 
                        </li>
                        <li className='col-12 mt-3'>
                            <Progress
                                percent={ progress }
                                status='active'
                            />
                        </li>
                    </ul>
                : null }       
            </div>
            <div className='col-12'>
                <ul className='col-12 p-0 list-none'>
                    { fighterList && !loadingStatus ? 
                        <li className='pt-3'>
                            <a onClick={ ()=> saveEvent( selectedEvent ) } id='list-submitBtn' className='col-12 btn btn-light'>Submit</a>
                        </li>
                    : null }
                </ul>
            </div>
        </div> 
    )
};

const mapStateToprops = state => {
    const compState = state.dataCenter.pastEvents;
    return{
        loadingStatus: compState.loadingStatus,
        progress: compState.progress,
        fighterList: compState.fighterList,
        selectedEvent: compState.selectedEvent,
        loadMessage: compState.loadMessage,
    }
}
const mapDispatchToprops = dispatch => {
    return{ 
        handleInputs: (e) => dispatch( handleInputs(e)),
        saveEvent: (selct) => dispatch( submitEvent(selct))
    };
};
export default connect( mapStateToprops, mapDispatchToprops )( EventFightersList );
