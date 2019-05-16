import React from 'react';
import { Statistic, Badge } from 'antd';

const StartCountDown = () => {
    const Countdown = Statistic.Countdown;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

    return(
        <Countdown 
            className='countdown'
            title={<p className='m-0'><Badge status='warning'/>Event Starts</p>} 
            value={deadline} format="HH:mm:ss:SSS"
        />
    )
}

export default StartCountDown;