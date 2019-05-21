import React from 'react';

import { Divider } from 'antd';
import './CSS/CardStats.css';

const CardStats = props => {
    let card = props.card;

    const stats = () => {
        let fttp = 0, price = 0, size = card.length;
        for( let i in card ){
            fttp += card[i].fttp;
            price += card[i].price;
        }
        return { avgFttp: fttp/size, avgPrice: price/size }
    };
    let { avgFttp, avgPrice } = stats();
    
    return(
        <div id='card-stats-container' className='col-12 p-0'>
            <div className='col-12 p-1'>
                <Divider className='col-12 my-2'/>
            </div>
            <ul className='row p-0 m-0 '>
                <li className='col-6 p-0'>
                    <ul className='col-12 p-0 pl-3'>
                        <li className='col-12'>
                            <small><span> Avg Fttp :</span>
                                <span> {` ${avgFttp}`} </span>
                            </small>
                        </li>
                        <li className='col-12'>
                            <small><span> Avg Price: </span>
                                <span> {` ${avgPrice}`} </span>
                            </small>
                        </li>
                    </ul>
                </li>
                <li className='col-6 p-0'>
                    <ul className='col-12 p-0 '>
                        <li className='col-12'>
                            <small className='text-center'>
                                <span> Avg Prob: </span>
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