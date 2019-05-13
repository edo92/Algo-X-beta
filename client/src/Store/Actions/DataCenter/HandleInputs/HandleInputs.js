export const handleInputs = ( e, option ) => {

    let { name, placeholder, value } = e.target;
    let inputPoints = { name, placeholder, value: parseInt(value) };

    return dispatch => {
        dispatch({
            type: `HANDLE_INPUT_${option}`,
            inputPoints
        });
    }
}; 