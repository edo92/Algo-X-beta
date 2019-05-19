import React from 'react';
import { Tag, Icon } from 'antd';

import SortOptions from './Components/SortOptions/SortOptions';
import CombinOptions from './Components/CombinOptions/CombinOptions';

const SortMenu = () => {
    return ( 
        <div className='col-12 p-0 container-style'>
            <div className='col-12 p-3'>
                <ul className='row col-12 p-0 m-0'>
                    <li className='col-12 col-md-6 p-0'>
                        <SortOptions/>
                    </li>
                    <li className='col-12 col-md-6 p-0'>
                        <CombinOptions/>
                    </li>
                </ul>
            </div>
        </div>       
    )
}

export default SortMenu;
