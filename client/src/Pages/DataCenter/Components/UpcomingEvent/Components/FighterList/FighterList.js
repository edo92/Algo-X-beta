import React from 'react';
import { Badge } from 'antd';
import './assets/CSS/FighterList.css';

import PointsInput from '../../../PointsInput/PointsInput';
import ProgressLoading from '../../../../../../Components/ProgressLoading/ProgressLoading';

const FighterList = props => {
    let { fighters, saveUpcome, handleInputs, progress, loadingStatus } = props;
    let onLoadStyle = loadingStatus ? { opacity:0.4 } : { opacity: 1 };

    return(
       <div className='row col-12 p-0 m-0'>
            <div id='upcome-fighters-container' className='col-12 p-2' style={ onLoadStyle }>
                <div className='col-12 p-0'>
                    { fighters ? fighters.map(( fighter, i ) => {
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
                        )
                    }) : null }
                    <div className='pt-3'>
                        { fighters ? <div className='col-12 p-0'>
                            <a onClick={ saveUpcome } className='col-12 btn btn-light bttn-submit'>Submit</a>
                        </div>
                        : null }
                    </div>    
                </div>   
            </div>
            <div className='col-12 p-0 pos-absolute pt-2 text-center'>
                <ProgressLoading
                    progress={ progress }
                    loadingStatus={ loadingStatus }
                />
            </div>
       </div>
    )
}
 
export default FighterList;