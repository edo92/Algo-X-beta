import React from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';
import './assets/UpcomingEvent.css';

import { getUpcomingEvent } from '../../../../Store/Actions/DataCenter/UpcomingEvent/index';
import { handleInputs } from '../../../../Store/Actions/DataCenter/HandleInputs/HandleInputs';

import FighterList from './Components/FighterList/FighterList';
import UpcomEventInfo from './Components/UpcomEventInfo/UpcomEventInfo';
import { submitUpcomeEvent } from '../../../../Store/Actions/DataCenter/UpcomingEvent/SubmitEvent/SubmitEvent';

class UpcomingEvent extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.upcomingEvent();
    }

    render(){
        let { upcomeEvent, saveUpcomeEvent, pointsHandleInput, progress,loadingStatus } = this.props;
        return(
            <div id='content-body' className='row col-12 p-0 m-0'>
                <div className='row col-12 p-2 m-0 pt-3 mt-3 justify-content-center'>
                    <div className='col-12 col-md-6 p-2 lineUp-cont'>
                        <div className='col-12 ov-scroll container-style'>
                            <div className='col-12 p-0'>
                                <p className='m-0 p-2 m-1 font-w-700'>Upcoming Events</p>
                            </div>
                            <Divider className='mt-0 mb-3'/>
                            <UpcomEventInfo
                                upcomeEvent={ upcomeEvent }
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 p-2 lineUp-cont'>
                        <div className='col-12 p-0 container-style'>
                            <div className='col-12 p-0'>
                                <p className='m-0 p-2 m-1 font-w-700'>Line Up</p>
                            </div>
                            <Divider className='mt-0 mb-3'/>
                            <FighterList
                                fighters={ upcomeEvent.fighterList }
                                saveUpcome={ saveUpcomeEvent }
                                handleInputs={ pointsHandleInput }
                                progress={ progress }
                                loadingStatus={ loadingStatus }
                            />
                        </div>
                    </div>       
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    let upcomeState = state.dataCenter.upcomeEvent;
    return {
        upcomeEvent: upcomeState.upcomeEvent,
        progress: upcomeState.progress,
        loadingStatus: upcomeState.loadingStatus,
    }
};
const mapDispatchToProps = dispatch => {
    return{ 
        upcomingEvent: ()=> dispatch( getUpcomingEvent()),
        pointsHandleInput: (e,o)=> dispatch( handleInputs(e,o)),
        saveUpcomeEvent: ()=> dispatch( submitUpcomeEvent() ),
    };
};
export default connect( mapStateToProps, mapDispatchToProps )( UpcomingEvent );