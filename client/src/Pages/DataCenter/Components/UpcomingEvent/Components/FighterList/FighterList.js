import React from 'react';
import { Badge, Input, Divider } from 'antd';
import './assets/CSS/FighterList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';

const handleInputs = () => {

}

const FighterList = props => {
    let fighterList = props.fighters;
    let submitEvent = props.saveUpcome;

    return(
       <div id='upcome-fighters-container' className='col-12 p-2'>
            <div className='col-12 p-0'>
                { fighterList ? fighterList.map(( fighter, i ) => {
                    let { name } = fighter;
                    return(
                        <ul key={name+i} className='row col-12 p-2 m-0 mb-2 fighter-box list-none'>
                            <li className='col-6 px-1'>
                                <ul className='row col-12 p-0 m-0 list-none'>
                                    <li className='col-2 text-center p-0 pt-1'>
                                        <Badge status='success'/>
                                    </li>
                                    <li className='col-10 p-0'>
                                        <p className='font-w-600 m-0 pt-1'>{ name }</p>
                                    </li>
                                </ul>
                            </li>
                            <li className='row col-6 m-0 p-0 list-none'>
                                <ul className='row col-12 m-0 p-0 list-none'>
                                    <li className='col-6 p-0'>
                                        <Input onChange={ handleInputs } name={ name } placeholder='price'/>
                                    </li>
                                    <li className='col-6 p-0'>
                                        <Input onChange={ handleInputs } name={ name } placeholder='fttp'/>
                                    </li>
                                </ul>
                            </li>
                            <Divider className='m-0 mt-3'/>
                        </ul>                
                    )}) :     
                    <div className='col-12 text-center'>
                        <LoadingIcon size={'large'} style={{marginTop:'55px'}}/>
                    </div>
                }
            </div>
            { fighterList ?
                <div className='col-12 p-0'>
                    <a onClick={ submitEvent } className='col-12 btn btn-primary'>Submit</a>
                </div>
            : null }
       </div>
    )
}
 
export default FighterList;