import React from 'react';
import { Icon } from 'antd';

class EventsList extends React.Component {
    state={ }

    selectedEvent( event ){
        let selectEl = Object.keys(this.state)[0];
        if( selectEl ) delete this.state[selectEl];
        this.setState({
            [event]: { 
                background: 'linear-gradient( rgba(73, 97, 185, 0.85) 6%, rgba(0, 57, 119, 0.85) 97% )', 
                color:'#ffff' 
            }
        })
    };
    
    selectEventHandler( url, event, eventInfo ){
        this.selectedEvent( event );
        //this.props.eventFighters( url, eventInfo );
    }

    render(){
        const state = this.state;
        let pastEvents = this.props.pastEvents;

        return(
            <div className='col-12 p-0'>
                { pastEvents.length ? pastEvents.map(( event, i ) => {
                    let eventName = event.name.split(':')[0];
                    let mainEvent = event.name.split(':')[1];
                    let url = event.url;
                    let eventInfo = { eventName: `${eventName}:${mainEvent}`, date: event.date, url: event.url };

                    return(
                        <ul
                            className='row col-12 m-0 p-0 p-1 mb-1 list-none'
                            id='event-col'
                            key={mainEvent+i}
                            onClick={ ()=> this.selectEventHandler(url, mainEvent, eventInfo) } 
                            style={ state[mainEvent] } key={mainEvent+i} 
                        >
                            <li className='col-1 p-1'>
                                { event.ownEvent ? 
                                    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                                    :
                                    <Icon theme="twoTone" twoToneColor='#ff5858' type="close-circle" />
                                }
                            </li>
                            <li className='col-5 p-2'>
                                <p id='eventName' className='font-weight-bold m-0 _logText'>{ eventName }</p>
                            </li>
                            <li className='col-5 p-2 text-right'>
                                <p id='mainEvent' className='m-0 _logText'>{ mainEvent }</p>
                            </li>
                        </ul>
                    )
                }) : null }
            </div>
        )
    }                        
}

export default EventsList;