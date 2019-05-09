import React from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';
import './assets/UpcomingEvent.css';


class UpcomingEvent extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        let { upComEvent, handleInputs, submit } = this.props;

        return(
            <div id='content-body' className='row col-12 p-0 m-0'>
                <div className='row col-12 p-2 m-0 pt-3 mt-3 justify-content-center'>
                    <div className='col-12 col-md-6 p-2 lineUp-cont'>
                        <div className='col-12 ov-scroll container-style'>
                            <div className='col-12 p-0'>
                                <p className='m-0 p-2 m-1 font-w-700'>Upcoming Events</p>
                            </div>
                            <Divider className='mt-0 mb-3'/>
                           
                        </div>
                    </div>
                    <div className='col-12 col-md-6 p-2 lineUp-cont'>
                        <div className='col-12 container-style'>
                            <div className='col-12 p-0'>
                                <p className='m-0 p-2 m-1 font-w-700'>Line Up</p>
                            </div>
                            <Divider className='mt-0 mb-3'/>
                        </div>
                    </div>       
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {

};
const mapDispatchToProps = dispatch => {
    return{ 
    };
};
export default connect( mapStateToProps, mapDispatchToProps )( UpcomingEvent );