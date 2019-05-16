import React from 'react';

const ContentStats = props => {
    console.log('checking imp' ,props.stats )
    return(
        <p>{props.fighter.name}</p>
    )
}

export default ContentStats;