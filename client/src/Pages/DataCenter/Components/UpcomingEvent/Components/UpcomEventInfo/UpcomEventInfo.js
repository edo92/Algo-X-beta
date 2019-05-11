import React from 'react';
import { Statistic, Badge, Divider } from 'antd';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';

const UpcomEventInfo = props => {
    const Countdown = Statistic.Countdown;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

    let upcomeEvent = props.upcomeEvent;

    return(
        <div className='col-12 p-0'>
            <div className='col-12 p-0'>
                { upcomeEvent.eventName ? 
                    <div className='col-12 p-0'>
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
                                    <Countdown 
                                        className='countdown'
                                        title={<p className='m-0'><Badge status='warning'/>Event Starts</p>} 
                                        value={deadline} format="HH:mm:ss:SSS"
                                    />
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
                    <div className='col-12 text-center'>
                        <LoadingIcon/>
                    </div>
                }
            </div>
        </div>
    )
}

export default UpcomEventInfo;
