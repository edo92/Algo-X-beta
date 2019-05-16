import React from 'react';
import { Divider } from 'antd';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';
import StartCountDown from './Components/StartCountDown';

const UpcomEventInfo = props => {
    let upcomeEvent = props.upcomeEvent;

    return(
        <div className='col-12 p-0'>
            <div className='col-12 p-0'>
                { upcomeEvent.eventName ? <div className='col-12 p-0'>
                    <div className='col-12 p-0 text-center'>
                        <p className='font-weight-bold'>{ upcomeEvent.eventName }</p>
                    </div>
                    <Divider/>
                    <div className='col-12 p-0'>
                        <ul className='row col-12 p-0 m-0 list-none'>
                            <li className='col-6 p-0'>
                                <p className='p-2 mt-1'>{ upcomeEvent.eventDate }</p>
                            </li>
                            <li className='col-6 p-0'>
                                <StartCountDown/>
                            </li>
                        </ul>
                    </div>     
                    <Divider/>
                    <div className='col-12 p-0'>
                        <ul className='col-12 p-0 m-0 list-none'>
                            <p>Fighters: { upcomeEvent.fighterList.length }</p>
                        </ul>
                    </div>
                    <Divider/>
                </div>
                : 
                <div className='col-12 p-0 text-center'>
                    <LoadingIcon size={'large'} style={{marginTop:'65px'}}/>
                </div> }
            </div>
        </div>
    )
}

export default UpcomEventInfo;
