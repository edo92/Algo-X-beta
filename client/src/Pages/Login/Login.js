import React from 'react';
import { Icon, Input, Divider } from 'antd';
import './CSS/Login.css';

const Login = () => {
    return (
        <div className='col-12 p-0'>
            <div className='row col-12 p-0 m-0 page-height'>
                <div className='col-12 col-md-5 h-100' style={{border:'1px solid green', background:'-webkit-gradient(linear,left top,right top,from(#748df8),to(#6fa7f8))'}}>
                    <div className='row col-12 p-2 m-0'>
                        <div id='' className='p-2'>
                            <h4 className='text-center text-white m-0 logo-style'>AlgoX</h4>
                        </div>
                    </div>
                    <div className='col-12 p-0 text-center text-white' style={{top:'20%'}}>
                        <h4 className='text-white'>Welcome Back</h4>
                        <h5 className='text-white'>Sign In</h5>
                        <p>Or</p>
                        <a className='col-10 btn text-white' style={{borderRadius:'7px', border:'1.5px solid white'}}>
                            Register
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-7 btn' style={{border:'1px solid gray'}}>
                    <div className='col-12 p-0' style={{top:'7%'}}>
                        <div className='col-12 p-0 pt-4'>
                            <h2 className='p-2 m-1' style={{color:'#719df8',textShadow:'rgb(87, 141, 255) 1px 1px 1px'}}>Sign in to Eduard</h2> 
                            <ul id='alt-login-icons-cont' className='row col-12 p-2 m-0 justify-content-center list-none'>
                                <li className='mx-1'>
                                    <Icon style={{fontSize:'22px'}} type='facebook'/>
                                </li>
                                <li className='mx-1'>
                                    <Icon style={{fontSize:'22px'}} type='google-plus'/>
                                </li>
                                <li className='mx-1'>
                                    <Icon style={{fontSize:'22px'}} type='linkedin'/>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 p-0'>
                            <div className='col-8 p-3 mt-3 text-center' style={{display:'inline-block'}}>
                                <div className='row col-12 p-0 m-0 justify-content-center'>
                                    <Input prefix={<Icon style={{color:'#bbbbbb'}} type='mail'/>} className='col-12 col-sm-11 col-md-10 p-1' placeholder='Email'/>
                                    <Input prefix={<Icon style={{color:'#bbbbbb'}} type='lock'/>} className='col-12 col-sm-11 col-md-10 p-1' placeholder='Password'/>
                                </div>
                                <div className='row col-12 p-0 m-0 p-1 justify-content-center'>
                                    <a className='col-12 col-sm-11 col-md-10 btn' style={{border:'1.5px solid #719df8', color:'#719df8'}}>Sign In</a>
                                </div>
                                <div className='p-3'>
                                    <Divider className='col-12 col-sm-11 col-md-10 m-0'>
                                        <small id='forgot-pass'><a>Forgat Password</a></small>
                                    </Divider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;