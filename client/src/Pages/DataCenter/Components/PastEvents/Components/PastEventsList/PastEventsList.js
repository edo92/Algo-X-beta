import React from 'react';
import { connect } from 'react-redux';

import { Icon } from 'antd';
import './assets/PastEventList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';
import EventsList from './Components/EventsList';

import { getPastEvents, getEventFighters } from '../../../../../../Store/Actions/DataCenter/PastEventsActions/index';

const PastEventsList = props => {
    let {
        pastEvents, getMoreEvents, loadNext,
        getFighterList, selectedEvent
    } = props;
 
    return(
        <div id='pastEvent-container' className='col-12'>
            <div className='col-12 p-0'>
                <EventsList 
                    pastEvents={ pastEvents }
                    getFighterList={ getFighterList }
                    selectedEvent={ selectedEvent }
                />
                { !pastEvents.length ? 
                    <div className='col-12 text-center'>
                        <LoadingIcon size={'large'} style={{marginTop:'65px'}}/>
                    </div> :
                null }
            </div>
            { pastEvents.length ?
                <div className='col-12'>
                    <div className='row col-12 m-0 p-0 py-3 justify-content-center'>
                        <a onClick={ getMoreEvents } className='text-center font-w-600 col-10'>Load More</a>
                        <span className='position-absolute' style={{marginLeft:'3.3rem'}}>
                            { loadNext ? <Icon type="loading" spin={ true }/> : null }
                        </span>
                    </div>
                </div>
            : null }           
        </div>          
    )
}

const mapStateToprops = state => {
    return{
        pastEvents: state.dataCenter.pastEventsList,
        loadNext: state.dataCenter.loadNext,
        selectedEvent: state.dataCenter.selectedEvent
    }
}
const mapDispatchToprops = dispatch => {
    return{ 
        getMoreEvents: () => dispatch( getPastEvents()),
        getFighterList: (url,info) => dispatch( getEventFighters(url,info))
    };
};
export default connect( mapStateToprops, mapDispatchToprops )( React.memo(PastEventsList) );