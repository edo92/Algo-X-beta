import React from 'react';
import './CSS/ContentStats.css';

const ContentStats = props => {
    let { basic, record, careerStats } = props.stats;

    return(
        <div className='col-12 p-0'>
            <div className='col-12 p-0 text-center'>
                <p><span>record: </span>
                <span>
                    {`${record.w}-${record.l}-${record.nc}`}
                </span></p>                
            </div>
            <div id='fighter-stats' className='col-12 p-0'>
                <div className='col-6 p-0'>
                    <p>{`age:  ${props.stats.basic.age}`}</p>
                    <p>{`height:  ${props.stats.basic.height}`}</p>
                    <p>{`reach:  ${props.stats.basic.reach}`}</p>
                    <p>{`weight:  ${props.stats.basic.weight}`}</p>
                    <p>{`stance:  ${props.stats.basic.stance.stance}`}</p>
                </div>
                <div className='col-6 p-0'>
                    <p>{`sapm:  ${ careerStats.sapm }`}</p>
                    <p>{`slpm:  ${props.stats.basic.slpm}`}</p>
                    <p>{`strAcc:  ${props.stats.basic.strAcc}`}</p>
                    <p>{`strDef:  ${props.stats.basic.strDef}`}</p>
                    <p>{`tdAcc:  ${props.stats.basic.tdAcc}`}</p>
                    <p>{`tdAvg:  ${props.stats.basic.tdAvg}`}</p>
                    <p>{`tdDef:  ${props.stats.basic.tdDef}`}</p>
                </div>
            </div>             
        </div>
    )
}

export default ContentStats;