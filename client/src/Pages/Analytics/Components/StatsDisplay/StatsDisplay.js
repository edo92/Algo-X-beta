import React from 'react';
import { Progress, Divider, Button, Spin } from 'antd';

class StatsDisplay extends React.Component {
    state={
        genStatsLoading: false,
        accuracyLoading: false
    };

    updateGenStats = () => {
        this.setState({ genStatsLoading: true },() => {
            setTimeout(()=> { 
                this.setState({ genStatsLoading: false });
            }, 3000);
        });
        this.props.generateStats();
    };

    updateAccuracy = () => {
        this.setState({ accuracyLoading: true }, () => {
            setTimeout(()=> { 
                this.setState({ accuracyLoading: false });
            }, 3000);
        });
    };

    render(){
        let genStatsStyle = { opacity:this.state.genStatsLoading ? .1 : 1 };
        let accuracyStyle = { opacity:this.state.accuracyLoading ? .1 : 1 };

        return(
            <div className='row col-12 p-0 m-0'>
                <div className='col-4 p-0 pr-2'>
                    <div className='container-style p-2'>
                        <div className='col-12 p-1'>
                            <p className='m-0'>Dtata</p>
                        </div>
                        <Divider className='m-1'/>
                        <ul className='col-12 p-2 m-0'>
                            <li className='p-2'>
                                <strong>Fighters scanned: 112</strong>
                            </li>
                            <li className='p-2'>
                                <strong>Events scanned: 230/245</strong>
                            </li>
                            <li className='p-2'>
                                <strong>GenStats updated: 11/12/2019</strong>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div className='col-4 p-0 pr-2'>
                    <div className='container-style p-2'>
                        <div className='col-12 p-1'>
                            <p className='m-0'>Accuracy</p>
                        </div>
                        <Divider className='m-1'/>
                        <div className='col-12 p-0 pt-1 text-center'>
                            { this.state.accuracyLoading && <Spin className='p-4 m-3 pos-absolute' size={'large'}></Spin> }
                            <Progress style={ accuracyStyle } type='dashboard' percent={75} />
                            <Button onClick={ this.updateAccuracy } disabled={ this.state.accuracyLoading } className='p-1 px-2 mx-1' type='primary'>
                                <small className='text-white'>Update Accuracy</small>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-0'>
                    <div className='container-style p-2'>
                        <div className='col-12 p-1'>
                            <p className='m-0'>General Stats</p>
                        </div>
                        <Divider className='m-1'/>
                        <div className='col-12 p-0 pt-1 text-center'>
                            { this.state.genStatsLoading && <Spin className='p-4 m-3 pos-absolute' size={'large'}></Spin> }
                            <Progress style={ genStatsStyle } type='dashboard' percent={75} />
                            <Button onClick={ this.updateGenStats } disabled={ this.state.genStatsLoading } className='p-1 px-2 mx-1' type='primary'>
                                <small className='text-white'>Update GenStats</small>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default React.memo( StatsDisplay );