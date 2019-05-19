import React from 'react';

const EventStats = props => {
    return(
        <p>{`Registered: ${props.eventSize}`}</p>
    )
}

export default EventStats;