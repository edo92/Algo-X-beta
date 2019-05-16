import React from 'react';
import { connect } from 'react-redux';

import { Badge } from 'antd';
import './assets/CSS/FightersList.css';

import { submitPastEvent } from '../../../../../../Store/Actions/DataCenter/PastEventsActions/index';
import { handleInputs } from '../../../../../../Store/Actions/DataCenter/HandleInputs/HandleInputs';

import ProgressLoading from '../../../../../../Components/ProgressLoading/ProgressLoading';
import PointsInput from '../../../PointsInput/PointsInput';
import EmptySkeleton from '../../../../../../Components/EmptySkeleton/EmptySkeleton';

const EventFightersList = props => {
    let { loadMessage ,loadingStatus, progress, handleInputs, fighterList, saveEvent, selectedEvent } = props;
    let onLoadStyle = loadingStatus ? { opacity:0.4 } : { opacity: 1 };

    return(
        <div className='row col-12 p-0 m-0'>
            <div style={ onLoadStyle } id='fightersList' className='row col-12 p-1 m-0'>
                <div className='col-12 p-2'>
                    { fighterList ? fighterList.map(( fighter, i )=> {
                        let { finish, finishMethod, round } = fighter.outcome;
                        return(
                            <ul key={fighter.name+i} id='list-container' className='row col-12 m-0 p-1 mb-1 list-none'>
                                <li className='col-6 p-1'>
                                    <ul className='col-12 p-1 list-none'>
                                        <li className='col-12 p-0'>
                                            <p className='m-0 font-weight-bold'>{ fighter.name }</p>
                                        </li>
                                        <li className='row col-12 m-0 p-0'>
                                            <Badge status={ finish === 'W' ? 'success' : 'error' } />
                                            <small>{`${finish } : ${ finishMethod }`}</small>
                                            <small className='ml-3'>{`R : ${ round }`}</small>
                                        </li>
                                    </ul>
                                </li>
                                <li className='col-6 p-1'>
                                    <PointsInput 
                                        name={ fighter.name }
                                        handleInputs={ handleInputs } 
                                        option={'pastEvents'}
                                    />
                                </li>
                            </ul> 
                        )
                    }) : <EmptySkeleton className='pt-4 opacity-50'/> }
                    <div className='col-12 p-0'>
                        { fighterList ? <div className='pt-3'>
                            <a onClick={ ()=> saveEvent( selectedEvent ) } className='col-12 btn btn-light bttn-submit'>Submit</a>
                        </div> : null }
                    </div>                           
                </div>  
            </div>
            <div className='col-12 p-0 pos-absolute pt-2 text-center'>
                <ProgressLoading
                    progress={ progress }
                    loadingStatus={ loadingStatus }
                    loadMessage={ loadMessage }
                />
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
