import React from 'react';
import { Divider, Icon } from 'antd';

const CardHeader = () => {
    return(
        <div className='col-12 p-0 p-1'>
            <ul className='row col-12 p-1 pl-2 m-0'>
                <li>
                    <a className='p-1'>
                        <Icon type='more'/>
                    </a>
                </li>
                <li>
                    <a className='p-1'>
                        <Icon type='star'/>
                    </a>
                </li>
                <li>
                    <a className='p-1'>
                        <Icon type='sync'/>
                    </a>
                </li>
            </ul>
            <Divider className='my-1'/>
        </div>
    )
}

export default CardHeader;