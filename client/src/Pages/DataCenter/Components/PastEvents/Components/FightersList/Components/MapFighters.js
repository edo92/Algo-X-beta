import React from 'react';
import { Input, Badge } from 'antd';

const MapFighters = props => {
    let { handleInputs } = props;
    let fighterList = props.fighterList;

    return(
            <div>
            { fighterList ? fighterList.map(( fighter, i )=> {
                let { finish, finishMethod, round } = fighter.outcome;
                return(
                    <ul key={fighter.name+i} id='list-container' className='row col-12 m-0 p-1 mb-1 list-none'>
                        <li className='col-7 p-1'>
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
                        <li className='col-5 p-1'>
                            <ul className='row col-12 m-0 p-1 pt-1 list-none'>
                                <li className='col-6 p-0'>
                                    <Input onChange={ handleInputs } name={ fighter.name } placeholder='price' />
                                </li>
                                <li className='col-6 p-0'>
                                    <Input onChange={ handleInputs } name={ fighter.name } placeholder='fftp'/>
                                </li>
                            </ul>
                        </li>
                    </ul> 
                )
            }) : null }
        </div>        
    )
}

export default MapFighters;