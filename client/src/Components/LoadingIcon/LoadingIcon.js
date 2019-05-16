import React from 'react';
import { Spin } from 'antd';

const LoadingIcon = props => {
    return(
        <Spin 
            style={ props.style ? {...props.style} : null } 
            size={'large'} 
            tip={ props.loadMessage ? props.loadMessage : 'Loading...' }
        >
        </Spin>
    )
};

export default React.memo( LoadingIcon );