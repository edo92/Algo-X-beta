import React from 'react';
import { Icon } from 'antd';


class EventsList extends React.Component {
    state={ }

    selectHandler = ( event ) => {
        let selectEl = Object.keys(this.state)[0];
        if( selectEl ) delete this.state[selectEl];
        this.setState({
            [event]: { 
                background: 'linear-gradient( rgba(73, 97, 185, 0.85) 6%, rgba(0, 57, 119, 0.85) 97% )', 
                color:'#ffff' 
            }
        });
        this.props.getFighterList( event );
    };

    render(){
        const extractData = event => {
            let { name, url, date } = event;
            let eventName = name.split(':')[0];
            let mainEvent = name.split(':')[1];
            return { eventName, mainEvent, date, url  };
        }
        
        const List = props => {
            let { mainEvent } = props.event;
            return (
                <ul className='row col-12 p-1 m-0 mb-1 list-none' id='event-col'
                    style={ state[mainEvent] }
                    key={ mainEvent }
                    onClick={ ()=> this.selectHandler(props.event) } 
                >
                    { props.children }
                </ul>  
            )
        }
        const state = this.state;
        let pastEvents = this.props.pastEvents;

        return(
            <div className='col-12 p-02'>
                { pastEvents && pastEvents.map(( event ) => {
                    let { eventName, mainEvent, url, date } = extractData( event );
                    return(
                        <List event={{ eventName, mainEvent, date, url }}>
                            <li className='col-1 p-1'>
                                { event.ownEvent ? 
                                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                                :
                                <Icon theme="twoTone" twoToneColor='#ff5858' type="close-circle" /> }
                            </li>
                            <li className='col-5 p-2'>
                                <p id='eventName' className='font-weight-bold m-0 _logText'>{ eventName }</p>
                            </li>
                            <li className='col-5 p-2 text-right'>
                                <p id='mainEvent' className='m-0 _logText'>{ mainEvent }</p>
                            </li>
                        </List>
                    )
                })}
            </div>
        )
    }                        
}

export default React.memo( EventsList );