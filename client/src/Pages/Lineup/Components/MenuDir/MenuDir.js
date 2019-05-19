import React from 'react';
import { Icon, Menu } from 'antd';

const MenuDir = props => {
    return(
        <div className='col-12 p-0 pt-1'>
            <Menu
                onClick={ props.selectMenu }
                selectedKeys={ [props.selected] }
                mode='horizontal'
            >
                <Menu.Item key='event'>
                    <Icon type='link' />
                    <span className='font-w-600'>Event</span>
                </Menu.Item>
                
                <Menu.Item key='combins'>
                    <Icon type='share-alt' />
                    <span className='font-w-600'>Combinations</span>
                </Menu.Item>
            </Menu>
        </div>                         
    )      
}

export default React.memo( MenuDir );
