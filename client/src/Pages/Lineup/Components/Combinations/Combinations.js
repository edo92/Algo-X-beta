import React from 'react';
import { connect } from 'react-redux';

import './CSS/Combinations.css';

import Cards from './Components/Card/Cards';
import SortMenu from './Components/SortMenu/SortMenu';
import EmptyContent from './Components/EmptyContent/EmptyContent';

import { generateCombins } from '../../../../Store/Actions/LineUp/GenerateCombins/GenerateCombins';

const Combinations = props => {
    return(
        <div id='combin-container' className='col-12 p-0'>
            <div className='col-12 p-0'>
                <div className='col-12 p-0'>
                    { props.cards.length ? 
                        <div className='col-12 p-0'>
                            <div className='col-12 p-2'>
                                <SortMenu/>
                            </div>
                            <div className='col-12 p-0'>
                                <Cards cards={ props.cards }/> 
                            </div>
                        </div>
                    : <EmptyContent generate={ props.generate }/> }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.lineUp.combins.cards
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        generate: ()=> dispatch( generateCombins())
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( Combinations );