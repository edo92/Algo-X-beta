import React from 'react';
import './CSS/CardStats.css';

const CardStats = () => {
    return(
        <div id='card-stats-container' className='col-12 p-0'>
            <ul className='row p-0 m-0 '>
                <li className='col-6 p-0'>
                    <ul className='col-12 p-0 pl-3'>
                        <li className='col-12'>
                            <small className='text-center'>
                                <span> Avg Prob: </span>
                                <span> {` 322`} </span>
                            </small>
                        </li>
                        <li className='col-12'>
                            <small><span> Avg Fttp :</span>
                                <span> {` 45%`} </span>
                            </small>
                        </li>
                    </ul>
                </li>
                <li className='col-6 p-0'>
                    <ul className='col-12 p-0 '>
                        <li className='col-12'>
                            <small><span> Avg Price: </span>
                                <span> {` 322`} </span>
                            </small>
                        </li>
                        <li className='col-12'>
                            <small><span> Avg Str :</span>
                                <span> {` 45%`} </span>
                            </small>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>                  
    )
}

export default CardStats;