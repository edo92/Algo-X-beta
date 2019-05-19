import React from 'react';

const ContentStats = props => {
    return(
        <div className='col-12 p-0'>
                <ul className='col-12 p-0 m-0 list-none'>
                    <li>
                        <p>{`age:  ${props.stats.basic.age}`}</p>
                        <p>{`height:  ${props.stats.basic.height}`}</p>
                        <p>{`reach:  ${props.stats.basic.reach}`}</p>
                        <p>{`weight:  ${props.stats.basic.weight}`}</p>
                        <p>{`stance:  ${props.stats.basic.stance.stance}`}</p>
                    </li>
                </ul>
            </div>
    )
}

export default ContentStats;