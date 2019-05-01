import React from 'react';
import { connect } from 'react-redux';

import { Icon } from 'antd';

const PastEventsList = props => {
    let { pastEvents, nextLoad } = props;
    
    return(
        <div></div>
        // <div id='pastEvent-container' className='col-12 p-0'>
        //         <div className='col-12 p-0'>
        //             { pastEvents.length ? pastEvents.map(( event, i ) => {
        //                 let eventName = event.name.split(':')[0];
        //                 let mainEvent = event.name.split(':')[1];
        //                 let url = event.url;
        //                 let eventInfo = { eventName: `${eventName}:${mainEvent}`, date: event.date, url: event.url };

        //                 return(
        //                     <ul onClick={ ()=> this.eventListClick(url, mainEvent, eventInfo) } style={ state[mainEvent] } key={mainEvent+i} className='row col-12 m-0 p-0 p-1 mb-1 list-none'  id='event-col' >
        //                         <li className='col-1 p-1'>
        //                             { event.ownEvent ? 
        //                                 <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
        //                                 :
        //                                 <Icon theme="twoTone" twoToneColor='#ff5858' type="close-circle" />
        //                             }
        //                         </li>
        //                         <li className='col-5 p-2'>
        //                             <p id='eventName' className='font-weight-bold m-0'>{ eventName }</p>
        //                         </li>
        //                         <li className='col-5 p-2 text-right'>
        //                             <p id='mainEvent' className='m-0'>{ mainEvent }</p>
        //                         </li>
        //                     </ul>
        //                 )
        //             }) : 
        //             <div className='col-12 text-center'>
        //                 <LoadingIcon size={'large'} style={{marginTop:'65px'}}/>
        //             </div>}
        //         </div>
        //         { events.length ?
        //             <div className='col-12'>
        //                 <div className='row col-12 m-0 p-0 p-2 justify-content-center'>
        //                     <a onClick={ moreEvent } className='text-center font-w-600 col-10'>Load More</a>
        //                     <span className='position-absolute' style={{marginLeft:'3.3rem'}}>
        //                         { nextLoad ? <Icon type="loading" spin={ true }/> : null }
        //                     </span>
        //                 </div>
        //             </div>
        //         : null }
        //     </div>  
    )
}
const mapStateToProps = state => {
    let { pastEventsList, nextLoad } = state.dataCenter;
    return{
        pastEvents: pastEventsList,
        nextLoad: nextLoad
    }
}
const mapDispatchToProps = dispatch => {
    return{ 

    };
};
export default connect( mapStateToProps, mapDispatchToProps )( PastEventsList );