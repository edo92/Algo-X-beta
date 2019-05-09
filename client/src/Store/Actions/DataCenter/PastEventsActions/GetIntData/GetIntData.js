import axios from 'axios';

export const initialData = () => {
    return async dispatch => {
        let intData = await axios.get('/get/datacenter/initial/data/');
        console.log('intdata', intData )
    }
}
