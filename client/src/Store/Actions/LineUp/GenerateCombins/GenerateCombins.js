import axios from 'axios';

export const generateCombins = () => {
    return async ( dispatch, getState ) => {
        let fighters = getState().lineUp.upcomeEvent.fighters;
        let combins = await axios.post(`/generate/combinations/`, { fighters });

        combins = combins.data.success;
        if( combins ){
            dispatch({
                type: 'COMBINATIONS',
                combins: combins
            });
        };
        
    };
};
