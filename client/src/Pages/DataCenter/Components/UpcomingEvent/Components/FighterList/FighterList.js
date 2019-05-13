import React from 'react';
import { Badge, Progress } from 'antd';
import './assets/CSS/FighterList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';
import PointsInput from '../../../PointsInput/PointsInput';

const FighterList = props => {
    let fighterList = props.fighters;
    let submitEvent = props.saveUpcome;
    let handleInputs = props.handleInputs;
    let progress = props.progress;
    let loadingStatus = props.loadingStatus;

    return(
       <div id='upcome-fighters-container' className='col-12 p-2'>
            <div className='col-12 p-0'>
                { fighterList ? fighterList.map(( fighter, i ) => {
                    let { name } = fighter;
                    return(
                        <div key={name+i} className='col-12 p-0 my-1'>
                            <div id='upcome-fighters-list' className='row col-12 p-2 py-3 m-0 container-style'>
                                <div className='col-6 px-1'>
                                    <ul className='row col-12 p-0 m-0 list-none'>
                                        <li className='col-2 text-center p-0 pt-1'>
                                            <Badge status='success'/>
                                        </li>
                                        <li className='col-10 p-0'>
                                            <p className='font-w-600 m-0 pt-1'>{ name }</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='row col-6 m-0 p-0 list-none'>
                                    <PointsInput 
                                        name={ name }
                                        handleInputs={ handleInputs }
                                        option={'upcomeEvent'}
                                    />
                                </div>
                            </div>
                        </div>                
                    )}) :     
                    <div className='col-12 text-center'>
                        <LoadingIcon size={'large'} style={{marginTop:'55px'}}/>
                    </div>
                }
                { loadingStatus ? 
                    <div className='col-12 p-0'>
                        <Progress
                            percent={ progress }
                            status='active'
                        />
                    </div> 
                : null }
            </div>
            { fighterList ?
                <div className='col-12 p-0 pt-2'>
                    <a onClick={ submitEvent } className='col-12 btn btn-light bttn-submit'>Submit</a>
                </div>
            : null }
       </div>
    )
}
 
export default FighterList;