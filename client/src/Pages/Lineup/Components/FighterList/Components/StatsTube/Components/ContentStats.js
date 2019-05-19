import React from 'react';

const ContentStats = props => {
    console.log('imp checkgn stats ----', props.stats )
    const BasicStats = stats => {
        for( let key in stats ){
            return(
                <li className='col-12 p-0'>
                    <p>{`${key}: ${stats[key]}`}</p>
                </li>  
            )
        }
    };

    return(
        <div className='col-12 p-0'>
                <ul className='col-12 p-0 m-0 list-none'>
                    <BasicStats stats={ props.stats.basic }/>
                </ul>
            </div>
    )
}

export default ContentStats;