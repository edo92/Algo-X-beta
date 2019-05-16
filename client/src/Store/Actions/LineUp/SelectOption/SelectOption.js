import { SELECT_OPTION } from '../actionTypes';

export const selectOption = ( index, option ) => {
    return ( dispatch, getState ) => {
        let opt = getState().lineUp.upcomeEvent.fighters[index].option;
        let onOff = opt && opt[option] ? {} : { [option]: true };

        dispatch({
            type: SELECT_OPTION,
            index,
            option: onOff
        });
    };
};