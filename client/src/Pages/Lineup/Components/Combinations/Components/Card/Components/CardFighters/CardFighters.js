import React from 'react';

const CardFighters = props => {
    const card = props.card;
    
    return(
        <ul className='row col-12 p-0 pl-2 m-0' style={{ lineHeight: '33px' }}>
            { card && card.map((item, i) => {
                return (
                    <li className='col-12'>
                        <ul className='row col-12 p-0'>
                            <li className='col-1 p-0'>
                                <div className='px-2'>
                                    <span>{ i+1 }</span>
                                </div>
                            </li>
                            <li className='col-10 p-0 text-center'>
                                <div className='px-2'>
                                    <span>{ item.name }</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardFighters;