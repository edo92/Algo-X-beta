import React from 'react';

const ContentStats = props => {
    return(
        <div className='col-12 p-0'>
                <ul className='row col-12 p-0 m-0 list-none'>
                <li className='col-12 p-0'>
                            <p>
                                <span>record</span>
                                <span>
                                    <span>
                                        <span>Win</span>
                                        <span>{props.stats.record.w}</span>
                                    </span>
                                    <span>
                                        <span>Lose</span>
                                        <span>{props.stats.record.l}</span>
                                    </span>
                                </span>
                                <span>{props.stats.record.w}</span>
                                <span>{props.stats.record.w}</span>
                            </p>
                    </li>
                    <li className='col-12 p-0'>
                        <ul className='p-0 m-0'>
                            <li className='col-12 p-0'>
                                <p>{`age:  ${props.stats.basic.age}`}</p>
                                <p>{`height:  ${props.stats.basic.height}`}</p>
                                <p>{`reach:  ${props.stats.basic.reach}`}</p>
                                <p>{`weight:  ${props.stats.basic.weight}`}</p>
                                <p>{`stance:  ${props.stats.basic.stance.stance}`}</p>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
    )
}

export default ContentStats;