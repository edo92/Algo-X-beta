import React from 'react';
import { Skeleton } from 'antd';

const EmptySkeleton = props => {

    return(
        <div className='col-12 p-0'>
            <Skeleton { ...props } active/>
        </div>
    )
}

export default EmptySkeleton;