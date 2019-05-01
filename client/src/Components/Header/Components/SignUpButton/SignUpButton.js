import React from 'react';
import { Icon } from 'antd';
import '../assets/CSS/Content.css';

const RightBtns = props => {

    return(
        <div className='col-12 pt-1'>
            <a href='/login' id='loginBtn' className='btn p-0 nav-btn-color float-right'>
                <Icon className='p-2' type='user'/>
                <small className='p-0 pr-3 px-2'>Login</small>
            </a>
        </div>
    )
};

export default RightBtns;
