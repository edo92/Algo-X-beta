import React from 'react';
import { connect } from 'react-redux';

import { Progress } from 'antd';
import './assets/CSS/FightersList.css';

import LoadingIcon from '../../../../../../Components/LoadingIcon/LoadingIcon';
import MapFighters from './Components/MapFighters';

const EventFightersList = props => {
    let { fighterList, loadingList, handleInputs, submit, progress, eventInfo, loadMessage } = props;
    let onLoadStyle = loadingList ? { opacity:0.4 } : { opacity: 1 };

    return(
        <div className='row col-12 p-0 m-0'>
            <div style={ onLoadStyle } id='fightersList' className='row col-12 m-0 p-0'>
                <MapFighters 
                    fighterList={ fighterList }
                    handleInputs={ handleInputs }
                    loadingList={ loadingList }
                />
            </div>
            <div className='col-12 p-0 pt-2 text-center position-absolute'>
                <ul className='col-12 p-0 list-none'>
                     { loadingList ? 
                        <ul className='col-12 p-0 list-none'>
                            <li className='col-12'>
                                <LoadingIcon loadMessage={ loadMessage } style={{marginTop:'65px'}}/> 
                            </li>
                            <li className='col-12 mt-3'>
                                <Progress
                                    percent={ progress }
                                    status="active"
                                />
                            </li>
                        </ul>
                    : null }
                </ul>
            </div>
            <div className='col-12 p-0'>
                <ul className='col-12 p-0 list-none'>
                    { fighterList && !loadingList ? 
                        <li className='pt-3'>
                            <a onClick={()=> submit( eventInfo ) } id='list-submitBtn' className='col-12 btn btn-light'>Submit</a>
                        </li>
                    : null }
                </ul>
            </div>
        </div> 
    )
};

const mapStateToprops = state => {
    console.log('state', state )
    return{
        fighterList: state.dataCenter.fighterList,
        loadingList: state.dataCenter.loadingList,
        progress: state.dataCenter.progress,
        loadMessage: state.dataCenter.loadMessage
    }
}
const mapDispatchToprops = dispatch => {
    return{ 

    };
};
export default connect( mapStateToprops, mapDispatchToprops )( EventFightersList );
