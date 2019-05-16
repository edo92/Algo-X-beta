import React from 'react';
import { Slider } from 'antd';

const MiniMenu = () => {
    const marks={
        1: 'simple',
        2: 'mid',
        3: 'complex'
    }

    return(
        <div className='col-12'>
            <ul className='row col-12 p-0 m-0 list-none'>
                <li className='col-4 p-0'>
                    <Slider marks={marks} step={null} min={1} max={3} />
                </li>
                <li className='col-8 p-0 pt-3 text-right'>
                    <a className='p-0 px-3 btn btn-primary'>Generate</a>
                </li>
            </ul>     
        </div>

    )
}

export default MiniMenu;