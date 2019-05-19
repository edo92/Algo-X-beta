import React from 'react';
import { Icon, Slider, Collapse } from 'antd';

const MiniMenu = props => {
    const Panel = Collapse.Panel;
    const marks={
        1: 'setting',
    }

    const generateCombisn = event => {
        props.generate();
        event.stopPropagation();
    }

    const Header = () => (
        <div className='col-12 p-0'>
            <div className='row col-12 p-0 m-0'>
                <div className='col-6 p-0 pt-1'>
                    <Icon className='px-2' type='setting'/>
                    <span className='p-0 m-0'>Setting</span>
                </div>
                <div className='col-6 p-0 text-right'>
                    <a onClick={ generateCombisn } className='py-02 px-3 btn btn-primary text-white fontsize-13px'>
                        <Icon className='pr-2' type='experiment' />
                        <span>Generate</span>
                    </a>
                </div>
            </div>
        </div>
    )
    
    return(
        <div className='col-12 p-0'>
            <Collapse expandIcon={({ isActive }) => <Icon type='caret-right' rotate={isActive ? 90 : 0} />}>
                <Panel header={ <Header/> } key='1'>
                    <ul className='row col-12 p-0 m-0 list-none'>
                        <li className='col-4 p-0'>
                            <Slider marks={marks} step={null} min={1} max={3} />
                        </li>
                        <li className='col-8 p-0 pt-3 text-right'>
                            
                        </li>
                    </ul> 
                </Panel>
            </Collapse>
        </div>

    )
}

export default MiniMenu;