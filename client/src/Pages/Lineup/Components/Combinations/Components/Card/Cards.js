import React from 'react';

import CardStats from './Components/CardStats/CardStats';
import CardFighters from './Components/CardFighters/CardFighters';
import CardHeader from './Components/CardHeader/CardHeader';
import EmptyContent from '../EmptyContent/EmptyContent';

const Cards = props => {
    const cards = props.cards;

    return(
        <div className='row col-12 p-0 m-0'>
            { cards && cards.map((card, i) => {
                return (
                    <div key={i} className='col-12 col-sm-6 col-md-6 col-lg-4 p-2'>
                        <div className='col-12 p-0 container-style'>
                            <div className='col-12 p-0'>
                                <CardHeader/>
                            </div>
        
                            <div className='col-12 pl-2'>
                                <CardFighters card={ card } />
                            </div>
                            
                            <div className='col-12 p-1 pb-3'>
                                <CardStats card={ card } />
                            </div>
                        </div>       
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;