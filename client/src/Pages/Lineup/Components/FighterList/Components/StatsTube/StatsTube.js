import React from 'react';
import { Icon, Popover } from 'antd';

import ContentStats from './Components/ContentStats';

const StatsTube = props => {
    return(
        <Popover 
            placement='right' title='Title'
            trigger='click'
            visible={ props.openTube[props.fighter.name] }
            content={
                <ContentStats fighter={ props.fighter} />
            }
        >
            <Icon onClick={ ()=> props.openClose( props.fighter.name ) } type="info-circle" />
        </Popover>
    )
}

export default StatsTube;