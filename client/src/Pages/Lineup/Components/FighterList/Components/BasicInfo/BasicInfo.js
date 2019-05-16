import React from 'react';

const BasicInfo = () => {
    return(
        <ul className='row col-12 p-0 m-0 list-none'>
            <li className='col-4 p-0 text-center' style={{borderLeft:'1px solid black'}}>
                <small className='font-w-600'>Prob: 45%</small>
            </li>
            <li className='col-4 p-0 text-center' style={{borderLeft:'1px solid black'}}>
                <small className='font-w-600'>Prob: 45%</small>
            </li>
            <li className='col-4 p-0 text-center' style={{borderLeft:'1px solid black'}}>
                <small className='font-w-600'>Prob: 45%</small>
            </li>
        </ul>
    )
}

export default BasicInfo;