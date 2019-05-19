import { HANDLE_INPUT_POINTS } from '../actionTypes';

export const handleInputs = ( e, option ) => {
    let { name, placeholder, value } = e.target;
    let inputPoints = { name, placeholder, value: parseInt(value) };

    return dispatch => {
        dispatch({
            type: HANDLE_INPUT_POINTS,
            inputPoints,
            option,
        });
    }
};  