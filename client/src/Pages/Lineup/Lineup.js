import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../../Components/SideBar/SideBar';
import MenuDir from './Components/MenuDir/MenuDir';
import FighterList from './Components/FighterList/FighterList';

import { getUpcomeEvent } from '../../Store/Actions/LineUp/index';
import Combinations from './Components/Combinations/Combinations';

class Lineup extends React.Component {
    state={
        current: 'event'
    }

    componentDidMount(){
        this.props.getUpcomeingEvent();
    }

    selectMenu = (e) => {
        this.setState({
            current: e.key
        });
    }

    render(){
        return(
            <div className='col-12 p-0'>
                <div className='row col-12 m-0 p-0'>
                    <SideBar/>
                    <div className='col-10 p-0'>
                        <div className='col-12 p-0'>
                            <MenuDir
                                selectMenu={ this.selectMenu }
                                selected={ this.state.current }
                            />
                        </div>       
                        <div className='col-12 p-2 bg-light'>
                            <div className='col-12 p-0'>
                                { this.state.current === 'event' && <FighterList/> } 
                                { this.state.current === 'combins' && <Combinations/> }         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUpcomeingEvent: ()=> dispatch( getUpcomeEvent())
    }
};
export default connect( null, mapDispatchToProps )( Lineup );