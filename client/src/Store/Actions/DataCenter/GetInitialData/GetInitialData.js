import axios from "axios";

export const GetInitialData = () => {
    return async dispatch => {
        try{
            let intData = await axios.get('/datacenter/initial/data/');
            console.log('int dat', intData )
            alert(intData.data.success)
        } catch( error ) {
            throw error
        }
    }
};