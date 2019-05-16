import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../../Components/SideBar/SideBar';
import MenuDir from './Components/MenuDir/MenuDir';
import FighterList from './Components/FighterList/FighterList';
import MiniMenu from './Components/MiniMenu/MiniMenu';

import { getUpcomeEvent } from '../../Store/Actions/LineUp/index';

class Lineup extends React.Component {

    componentDidMount(){
        this.props.getUpcomeingEvent();
    }

    render(){
        return(
            <div className='col-12 p-0'>
                <div className='row col-12 m-0 p-0'>
                    <SideBar/>
                    <div className='col-10 p-0'>
                        <div className='col-12 p-0'>
                            <MenuDir/>
                        </div>       
                        <div className='col-12 p-2 bg-light h-100'>
                            <div className='col-12 p-0'>
                                <div className='col-12 p-0 pb-2'>
                                    <MiniMenu/>
                                </div>
                                <div className='col-12 p-0 container-style' style={{minHeight:'450px'}}>
                                    <div className='col-12 p-0'>
                                        <FighterList
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getUpcomeingEvent: ()=> dispatch( getUpcomeEvent())
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( Lineup );