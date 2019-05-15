import React from 'react';
import { Progress } from 'antd';

import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

const ProgressLoading = props => {
    let { progress, loadMessage, loadingStatus } = props;
    return(
        <div className='col-12 p-0 pos-absolute'style={{zIndex:100}}>
            { loadingStatus ? 
                <ul className='col-12 p-0 list-none'>
                    <li className='col-12'>
                        <LoadingIcon loadMessage={ loadMessage } style={{marginTop:'65px'}}/> 
                    </li>
                    <li className='col-12 mt-3'>
                        <Progress
                            percent={ progress }
                            status='active'
                        />
                    </li>
                </ul>
            : null }  
        </div>
    )
}

export default ProgressLoading;