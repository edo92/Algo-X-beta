import React, { memo } from 'react';
import { Empty, Icon } from 'antd';

const EmptyContent = props => {
    return (
        <div className='col-12 pt-3'>
            <div id='empty-box' className='col-12'>
                <Empty />
            </div>
            <div className='p-3 text-center text-white'>
                <a onClick={ props.generate } className='btn btn-primary'>
                    <Icon className='pr-2' type='experiment' />
                    <span>Generate Combinations</span>
                </a>
            </div>
        </div>
    )
}

export default memo( EmptyContent );