import React from 'react';
import { Input } from 'antd';

const PointsInput = props => {
    let { name, handleInputs } = props;

    return (
        <ul className='row col-12 m-0 p-0 list-none'>
            <li className='col-6 p-0'>
                <Input onChange={ handleInputs } name={ name } placeholder='price'/>
            </li>
            <li className='col-6 p-0'>
                <Input onChange={ handleInputs } name={ name } placeholder='fttp'/>
            </li>
        </ul>
    )
}

export default PointsInput;