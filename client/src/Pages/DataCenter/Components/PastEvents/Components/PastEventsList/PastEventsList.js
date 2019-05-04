import React from 'react';
import { connect } from 'react-redux';

import { Icon } from 'antd';
import './assets/PastEventList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';

import { GetPastEvents, GetEventFighters } from '../../../../../../Store/Actions/DataCenter/PastEventsActions/index';
import EventsList from './Components/EventsList';

const PastEventsList = props => {
    let { pastEvents, moreEvents, loadNext, getFighterList } = props;
 
    return(
        <div className='col-12 p-0'>
            <div className='col-12 p-0'>
                <EventsList 
                    pastEvents={ pastEvents }
                    getFighterList={ getFighterList }
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
                        <a onClick={ moreEvents } className='text-center font-w-600 col-10'>Load More</a>
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
        loadNext: state.dataCenter.loadNext
    }
}
const mapDispatchToprops = dispatch => {
    return{ 
        getMoreEvents: () => dispatch( GetPastEvents()),
        getFighterList: (url,info) => dispatch( GetEventFighters(url,info))
    };
};
export default connect( mapStateToprops, mapDispatchToprops )( PastEventsList );