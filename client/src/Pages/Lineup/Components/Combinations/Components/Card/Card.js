import React from 'react';
import { Divider } from 'antd';

import CardStats from './Components/CardStats/CardStats';
import CardFighters from './Components/CardFighters/CardFighters';
import CardHeader from './Components/CardHeader/CardHeader';

const Card = () => {
    return(
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 p-2'>
            <div className='col-12 p-0 container-style'>
               <div className='col-12 p-0'>
                    <CardHeader/>
               </div>
                <div className='col-12 pl-2'>
                    <CardFighters/>
                </div>
                <div className='col-12'>
                    <Divider className='col-12 my-1'/>
                </div>
                <div className='col-12 p-1 pb-3'>
                    <CardStats/>
                </div>
            </div>       
        </div>
    )
}

export default Card;