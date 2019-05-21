import React from 'react';
import { connect } from 'react-redux';

import './CSS/FighterList.css';

import OptionBtns from './Components/OptionBtns/OptionBtns';
import BasicInfo from './Components/BasicInfo/BasicInfo';
import StatsTube from './Components/StatsTube/StatsTube';

import { selectOption } from '../../../../Store/Actions/LineUp/index';
import { openStatsTube } from '../../../../Store/Actions/LineUp/OpenStatsTube/OpenStatsTube';
import { generateCombins } from '../../../../Store/Actions/LineUp/GenerateCombins/GenerateCombins';

import MiniMenu from '../MiniMenu/MiniMenu';
import CubeLoading from '../../../../Components/CubeLoading/CubeLoading';

const FighterList = props => {
    let { fighters } = props;

    return (
        <div className='col-12 p-0 pb-3 ov-hidde'>
            <div className='col-12 p-0 py-2 pb-3'>
                <MiniMenu generate={ props.generateCombins }/>
            </div>
            <div id='fighterList-container' className='col-12 p-1 container-style'>
                <div className='p-3 ov-scroll'>
                    { fighters ? fighters.map(( fighter, i ) => {
                        return(
                            <ul key={fighter.name+i} className='row col-12 p-0 p-2 my-1 m-0 list-none container-style space-between'>
                                <li className='col-1 p-0 text-center'>
                                    <StatsTube
                                        fighter={ fighter }
                                        openClose={ props.statsTubeOpenClose }
                                        openTube={ props.openTube }
                                        stats={ props.stats }
                                    />
                                </li>
                                <li className='col-11 col-md-3 p-0'>
                                    <p className='font-w-600 m-0'>{ fighter.name }</p>
                                </li>
                                <li className='col-12 col-md-4 p-0'>
                                    <BasicInfo/>
                                </li>
                                <li className='col-12 col-md-3 p-0'>
                                    <OptionBtns
                                        optionSelect={ props.optionSelect }
                                        option={ fighter.option }
                                        index={ i }
                                    />
                                </li>
                            </ul>
                        )
                    }) : 
                    <div className='col-12 text-center mt-7rem'>
                        <CubeLoading/>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log('state', state )
    let lineupState = state.lineUp; 
    return {
        fighters: lineupState.upcomeEvent.fighters,
        openTube: lineupState.fighterStats.openTube,
        stats: lineupState.fighterStats.stats,
        
    }
};
const mapDispatchToProps = dispatch => {
    return {
        optionSelect: (i,op)=> dispatch( selectOption(i,op) ),
        statsTubeOpenClose: (name)=> dispatch( openStatsTube(name)),
        generateCombins: ()=> dispatch(generateCombins() )
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( FighterList );