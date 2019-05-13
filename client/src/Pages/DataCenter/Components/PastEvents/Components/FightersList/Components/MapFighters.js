import React from 'react';
import { Badge } from 'antd';
import PointsInput from '../../../../PointsInput/PointsInput';

const MapFighters = props => {
    let { handleInputs, fighterList, saveEvent, selectedEvent, loadingStatus } = props;

    return(
            <div className='col-12 p-2'>
            { fighterList ? fighterList.map(( fighter, i )=> {
                let { finish, finishMethod, round } = fighter.outcome;
                return(
                    <ul key={fighter.name+i} id='list-container' className='row col-12 m-0 p-1 mb-1 list-none'>
                        <li className='col-6 p-1'>
                            <ul className='col-12 p-1 list-none'>
                                <li className='col-12 p-0'>
                                    <p className='m-0 font-weight-bold'>{ fighter.name }</p>
                                </li>
                                <li className='row col-12 m-0 p-0'>
                                    <Badge status={ finish === 'W' ? 'success' : 'error' } />
                                    <small>{`${finish } : ${ finishMethod }`}</small>
                                    <small className='ml-3'>{`R : ${ round }`}</small>
                                </li>
                            </ul>
                        </li>
                        <li className='col-6 p-1'>
                            <PointsInput 
                                name={ fighter.name }
                                handleInputs={ handleInputs } 
                                option={'pastEvents'}
                            />
                        </li>
                    </ul> 
                )
            }) : null }
            <div className='col-12 p-0'>
                { fighterList ? <div className='pt-3'>
                    <a onClick={ ()=> saveEvent( selectedEvent ) } className='col-12 btn btn-light bttn-submit'>Submit</a>
                </div> : null }
            </div>                           
        </div>        
    )
}

export default MapFighters;