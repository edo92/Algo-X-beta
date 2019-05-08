import { HANDLE_INPUT_PAST_EVENT } from '../../../../../Store/Actions/DataCenter/actionTypes';

export const HandleInputs = (e) => {
    let { name, placeholder, value } = e.target;
    console.log('name imp', name )
    let input = { name, placeholder, value: parseInt(value) };

    return dispatch => {
        dispatch( resultInput( input ));
    }
};

const resultInput = input => {
    return{
        type: HANDLE_INPUT_PAST_EVENT,
        input
    }
};