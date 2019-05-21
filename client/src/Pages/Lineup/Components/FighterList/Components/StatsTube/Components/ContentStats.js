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
            <div id='fighter-stats' className='row col-12 p-0 m-0'>
                <div className='col-6 p-0'>
                    <p>{`age:  ${ basic.age}`}</p>
                    <p>{`height:  ${ basic.height}`}</p>
                    <p>{`reach:  ${ basic.reach}`}</p>
                    <p>{`weight:  ${ basic.weight}`}</p>
                    <p>{`stance:  ${ basic.stance.stance}`}</p>
                </div>
                <div className='col-6 p-0'>
                    <p>{`sapm:  ${ careerStats.sapm }`}</p>
                    <p>{`slpm:  ${ careerStats.slpm }`}</p>
                    <p>{`strAcc:  ${ careerStats.strAcc}`}</p>
                    <p>{`strDef:  ${ careerStats.strDef}`}</p>
                    <p>{`tdAcc:  ${ careerStats.tdAcc}`}</p>
                    <p>{`tdAvg:  ${ careerStats.tdAvg}`}</p>
                    <p>{`tdDef:  ${ careerStats.tdDef}`}</p>
                </div>
            </div>             
        </div>
    )
}

export default ContentStats;