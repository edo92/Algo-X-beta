import React from 'react';
import { connect } from 'react-redux';

import { Progress } from 'antd';
import './assets/CSS/FightersList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';
import MapFighters from './Components/MapFighters';

import { submitPastEvent } from '../../../../../../Store/Actions/DataCenter/PastEventsActions/index';
import { handleInputs } from '../../../../../../Store/Actions/DataCenter/HandleInputs/HandleInputs';

const EventFightersList = props => {
    let { loadMessage ,loadingStatus, progress } = props;
    let onLoadStyle = loadingStatus ? { opacity:0.4 } : { opacity: 1 };

    return(
        <div className='row col-12 p-0 m-0'>
            <div style={ onLoadStyle } id='fightersList' className='row col-12 p-1 m-0'>
                <MapFighters { ...props }/>
            </div>
            <div className='col-12 p-0 pt-2 text-center pos-absolute'>
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
        </div> 
    )
};

const mapStateToprops = state => {
    console.log('state', state )
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
        handleInputs: (e,o) => dispatch( handleInputs(e,o)),
        saveEvent: (selct) => dispatch( submitPastEvent(selct))
    };
};
export default connect( mapStateToprops, mapDispatchToprops )( EventFightersList );
