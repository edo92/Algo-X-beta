import React from 'react';

import { Icon } from 'antd';
import './CSS/Footer.css';

const Footer = () =>{
    return(
        <div className='col-12 p-0'>
            <div id='footer' className='col-12 p-0' style={{backgroundColor:'#2A3039', height: '350px'}}>
                <div id='footer-nav' className='row col-12 m-0 p-3'>
                    <div className='row col-7 m-0'>
                        <nav className='col-3'>
                            <h2>Learn More</h2>
                            <ul className='list-none p-0 m-0 pt-2'>
                                <li>
                                    <a>How it works</a>
                                </li>
                                <li>
                                    <a>Benefits</a>
                                </li>
                                <li>
                                    <a>Disclosure</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className='col-3'>
                            <h2>Services</h2>
                            <ul className='list-none p-0 m-0 pt-2'>
                                <li>
                                    <a>Membership</a>
                                </li>
                                <li>
                                    <a>Plance</a>
                                </li>
                                <li>
                                <   a>Pricing</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className='col-3'>
                            <h2>Company</h2>
                            <ul className='list-none p-0 m-0 pt-2'>
                                <li>
                                    <a>About AlogX</a>
                                </li>
                                <li>
                                    <a>Contact Us</a>
                                </li>
                                <li>
                                    <a>Contributions</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-4'>
                        <div className='row col-12 m-0'>
                            <Icon className='col-1 mt-1 mx-2' style={{ fontSize:'1.8rem', color:'#ffff' }} type="facebook" />
                            <Icon className='col-1 mt-1 mx-2' style={{ fontSize:'1.8rem', color:'#ffff' }} type="twitter" />
                            <Icon className='col-1 mt-1 mx-2' style={{ fontSize:'1.8rem', color:'#ffff' }} type="instagram" />
                            <Icon className='col-1 mt-1 mx-2' style={{ fontSize:'1.8rem', color:'#ffff' }} type="linkedin" />
                            <Icon className='col-1 mt-1 mx-2' style={{ fontSize:'1.8rem', color:'#ffff' }} type="google-plus" />
                        </div>
                    </div>
                </div>

                <div id='footer-bottom' className='col-12 p-0' style={{backgroundColor:'rgba(0,0,0,.2)', height: '60px', bottom:'0', position:'absolute'}}>
                    <div className='row col-12 p-0 m-0 pt-3'>
                        
                        <div className='col-4'>
                            <p className='text-right text-white'>© 2019 Copyright AlgoX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
