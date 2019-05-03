import React from 'react';
import { Spin } from 'antd';

const LoadingIcon = props => {
    return(
        <Spin style={props.style? {...props.style} : null } size={props.size ? props.size : 'small'} tip="Loading...">
            
        </Spin>
    )
};

export default LoadingIcon;