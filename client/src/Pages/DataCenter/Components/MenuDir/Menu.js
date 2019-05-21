import React from 'react';
import { Icon, Menu } from 'antd';

const MenuDir = props => {
    return(
        <div className='col-12 p-0 py-1'>
            <Menu
                onClick={ props.menuSelect }
                mode='horizontal'
                selectedKeys={ [props.selected] }
            >
                <Menu.Item key='past'>
                    <Icon type='caret-left' />
                    <span className='font-w-600'>Past Events</span>
                </Menu.Item>

                <Menu.Item key='upcoming'>
                    <Icon type='caret-right' />
                    <span className='font-w-600'>Upcoming Event</span>
                </Menu.Item>

                <Menu.Item key='saved'>
                    <Icon type='caret-down' />
                    <span className='font-w-600'>Saved Events</span>
                </Menu.Item>
            </Menu>
        </div>                         
    )      
}

export default React.memo( MenuDir );
