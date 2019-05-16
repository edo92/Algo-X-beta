import React from 'react';
import { connect } from 'react-redux';

import OptionBtns from './Components/OptionBtns/OptionBtns';
import BasicInfo from './Components/BasicInfo/BasicInfo';
import StatsTube from './Components/StatsTube/StatsTube';

import { selectOption } from '../../../../Store/Actions/LineUp/index';
import { openStatsTube } from '../../../../Store/Actions/LineUp/OpenStatsTube/OpenStatsTube';

const FighterList = props => {
    let { fighters } = props;

    return (
        <div className='col-12 p-3 ov-scroll' style={{maxHeight:'600px'}}>
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
                        <li className='col-3 p-0'>
                            <p className='font-w-600 m-0'>{ fighter.name }</p>
                        </li>
                        <li className='col-3 p-0'>
                            <BasicInfo/>
                        </li>
                        <li className='col-3 p-0'>
                            <OptionBtns
                                optionSelect={ props.optionSelect }
                                option={ fighter.option }
                                index={ i }
                            />
                        </li>
                    </ul>
                )
            }) : null }
        </div>
    )
}


const mapStateToProps = state => {
    console.log('state', state )
    return {
        fighters: state.lineUp.upcomeEvent.fighters,
        openTube: state.lineUp.fighterStats.openTube,
        stats: state.lineUp.fighterStats.stats,
        
    }
};
const mapDispatchToProps = dispatch => {
    return {
        optionSelect: (i,op)=> dispatch( selectOption(i,op) ),
        statsTubeOpenClose: (name)=> dispatch( openStatsTube(name))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( FighterList );