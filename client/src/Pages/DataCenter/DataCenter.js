import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../../Components/SideBar/SideBar';
import MenuDir from './Components/MenuDir/Menu';
import PastEvent from './Components/PastEvents/PastEvents';
import UpcomingEvent from './Components/UpcomingEvent/UpcomingEvent';

import { GetPastEvents } from '../../Store/Actions/DataCenter/GetPastEventsList/GetPastEvents';

class DataCenter extends React.Component{
    state={
        current: 'past'
    }

    componentDidMount(){
        this.props.getIntData();
    }

    menuSelect = (e) => {
        this.setState({ current: e.key });
    }

    render(){
        return(
            <div className='col-12 p-0'>
                <div className='row col-12 p-0 m-0'>
                    <SideBar/>
                    <div className='col-10 p-0 bg-light'>
                        <div className='col-12 p-0'>
                            <MenuDir
                                menuSelect={ this.menuSelect }
                                selected={ this.state.current }
                            />
                        </div>
                        <div className='col-12 p-0'>
                            <div className='col-12 p-0'>
                                { 
                                    this.state.current === 'past' ?
                                    <PastEvent/>
                                    :
                                    <UpcomingEvent/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        )
    } 
};
const mapDispatchToProps = dispatch => {
    return{ 
        getIntData: ()=> dispatch( GetPastEvents())
    };
};
export default connect( null, mapDispatchToProps )( DataCenter );