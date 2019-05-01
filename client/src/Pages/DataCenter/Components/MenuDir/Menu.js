import React from 'react';
import { Icon, Menu } from 'antd';

const MenuDir = props => {
    return(
        <div className='col-12 p-0'>
            <Menu
                onClick={ props.menuSelect }
                mode="horizontal"
                selectedKeys={ [props.selected] }
            >
                <Menu.Item key="past">
                    <Icon type="mail" />Past Events
                </Menu.Item>
                <Menu.Item key="upcoming">
                    <Icon type="appstore" />Upcoming Event
                </Menu.Item>
            </Menu>
        </div>                         
    )      
}

export default MenuDir;
