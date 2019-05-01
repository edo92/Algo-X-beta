import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import './assets/CSS/SideBar.css';

const SideBar = () => {
    const path = window.location.pathname.split('/')[1];
    const sessionId = window.location.pathname.split('/')[1];
    
    return(
        <div id='sideBar' className='col-2 p-0 sideBar'>
            <ul id='sideBar-header' className='col-12 p-0'>
                <li id='logo-dash' className='ml-3'></li>
                <li id='logo' className='ml-3 pb-2'>
                    <p className='m-0 py-2'></p>
                </li>
            </ul>
            <ul className='col-12 m-0 p-0 pt-3 mt-2'>
                <li className='sideBar-dir'>
                    <NavLink className='col-12 row m-0 p-0 py-3 font-styleX' exact={true} to="/" activeClassName='selected'>
                        <Icon className='col-3 p-0' type='home' />
                        <small className='col-8'>Home</small>
                    </NavLink>
                </li>
                <li className='sideBar-dir'>
                    <NavLink className='col-12 row m-0 p-0 py-3 font-styleX' exact={true} to="/lineup" activeClassName='selected'>
                        <Icon className='col-3 p-0' type='project' />
                        <small className='col-8'>Line Up</small>
                    </NavLink>
                </li>
                <li className='sideBar-dir'>
                    <NavLink className='col-12 row m-0 p-0 py-3 font-styleX' exact={true} to="/analytics" activeClassName='selected'>
                        <Icon className='col-3 p-0' type='bar-chart' />
                        <small className='col-8'>Analytics</small>
                    </NavLink>
                </li>
                <li className='sideBar-dir'>
                    <NavLink className='col-12 row m-0 p-0 py-3 font-styleX' exact={true} to="/reports" activeClassName='selected'>
                        <Icon className='col-3 p-0' type='file-text' />
                        <small className='col-8'>Reports</small>
                    </NavLink>
                </li>
                <li className='sideBar-dir'>
                    <NavLink className='col-12 row m-0 p-0 py-3 font-styleX' exact={true} to="/datacenter" activeClassName='selected'>
                        <Icon className='col-3 p-0' type='database' />
                        <small className='col-8'>D Center</small>
                   </NavLink>
                </li>
                <li className='sideBar-dir'>
                    <NavLink className='col-12 row m-0 p-0 py-3 font-styleX' exact={true} to="/algorithm" activeClassName='selected'>
                        <Icon className='col-3 p-0' type='setting' />
                        <small className='col-8'>Algorithm</small>
                    </NavLink>
                </li>
            </ul>
        </div>  
    )
};

export default SideBar;