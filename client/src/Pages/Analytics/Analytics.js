import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../../Components/SideBar/SideBar';
import Chart from './Components/Chart/Chart';
import StatsDisplay from './Components/StatsDisplay/StatsDisplay';

import { generateGenStats } from '../../Store/Actions/Analytics/GenerateGenStats/GenerateGenStats';

const Analytics = props => {
    return (
        <div className='col-12 p-0 ov-hidden'>
            <div className='row col-12 p-0 m-0'>
                <SideBar/>
                <div className='col-10 p-0'>
                    <div className='col-12 p-2'>
                      <p>Analytics</p>
                    </div>
                    <div className='col-12 p-0 bg-light' style={{height:'761px'}}>
                        <div className='col-12 p-3'>
                            <div className='col-12 p-0'>
                                <StatsDisplay 
                                    generateStats={ props.generateStats }
                                />
                            </div>
                            <div className='col-12 p-0 my-3 container-style' style={{height:'620px'}}>
                                <div className='col-12 p-2'>
                                    <div className='col-12 p-3'>
                                        <h5>Accuracy</h5>
                                    </div>
                                    <div className='col-12 p-0'>
                                        <Chart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        generateStats: ()=> dispatch( generateGenStats())
    }
};
export default connect( null, mapDispatchToProps )( Analytics );
