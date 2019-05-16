import React from 'react';
import { Tag } from 'antd';
import './CSS/option.css';

class OptionBtns extends React.Component {
    render(){
        const { CheckableTag } = Tag;
        const OptionTag = props => {
            return(
                <CheckableTag { ...props }/>
            )
        }
        let { index, option } = this.props;
   
        return(
            <div className='col-12 p-0 text-center'>
                <OptionTag 
                    className={ option && option.fave ? 'fave-option-selected' : 'fave-option' }
                    checked={ option && option.fave }
                    onChange={ ()=> this.props.optionSelect( index, 'fave' ) }
                >
                    Fave
                </OptionTag>

                <OptionTag
                    className={ option && option.back ? 'back-option-selected' : 'back-option' }
                    checked={ option && option.back }
                    onChange={ ()=> this.props.optionSelect( index, 'back' ) }
                >
                    Back
                </OptionTag>

                <OptionTag
                    className={ option && option.excl ? 'excl-option-selected' : 'excl-option' }
                    checked={ option && option.excl }
                    onChange={ ()=> this.props.optionSelect( index, 'excl' ) }
                >
                    Excl
                </OptionTag>
            </div>
        )
    }

}

export default OptionBtns;
