import React from 'react';

import { Empty, Icon } from 'antd';
import './CSS/Combinations.css';
import Card from './Components/Card/Card';
import SortMenu from './Components/SortMenu/SortMenu';

const Combinations = props => {
    return(
        <div id='combin-container' className='col-12 p-0'>
            <div className='col-12 p-0'>
                { props.check ?
                    <div className='col-12 pt-3'>
                        <div id='empty-box' className='col-12'>
                            <Empty />
                        </div>
                        <div className='p-3 text-center text-white'>
                            <a className='btn btn-primary'>
                                <Icon className='pr-2' type='experiment' />
                                <span>Generate Combinations</span>
                            </a>
                        </div>
                    </div>
                    :
                    <div className='col-12 p-0'>
                        <div className='col-12 p-0'>
                            <div className='col-12 p-2'>
                                <SortMenu/>
                            </div>
                            <div className='row col-12 m-0 p-0'>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Combinations;