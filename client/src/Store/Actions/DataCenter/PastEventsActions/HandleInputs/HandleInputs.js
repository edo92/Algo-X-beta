import { HANDLE_INPUT_PAST_EVENT } from '../../../../../Store/Actions/DataCenter/actionTypes';

export const handleInputs = (e) => {
    let { name, placeholder, value } = e.target;
    let input = { name, placeholder, value: parseInt(value) };

    return dispatch => {
        dispatch({
            type: HANDLE_INPUT_PAST_EVENT,
            input
        });
    }
};