export const GetEventFighters = ( url, eventName ) => {
    return dispatch => {
        dispatch( loading( eventName ));
       // emitProgress( url );
    }
}
const loading = eventName => {
    return{
        type: 'LOADING_LIST',
        loadingList: true,
        selectedEvent: eventName,
    }
};