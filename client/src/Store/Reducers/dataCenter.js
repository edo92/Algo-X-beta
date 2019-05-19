import { 
    PAST_EVENTS, UPCOMING_EVENT, NEXT_LOAD, ERROR_OCCURED,
    EVENT_FIGHTERS, PROGRESS_LOADING, SELECT_EVENT, PAST_EVENT_SAVED,
    HANDLE_INPUT_POINTS, UPCOME_EVENT_SAVED, PAST_INT_DATA
} from '../Actions/DataCenter/actionTypes';
 
const initialState = {
    pastEvents: {
        pastEventsList:[],
        eventPage: 0,
        progress: 0,
        inputPoints: {},
        collectStats: {}
    },
    upcomeEvent: {
        upcomeEvent: {},
        inputPoints: {},
        progress: 0,
    }
};

const dataCenter = ( state = initialState, action ) => {
    switch( action.type ){
    
// ----------> Past Event State <----------
    case PAST_EVENTS:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                pastEventsList: [
                    ...state.pastEvents.pastEventsList, ...action.pastEventsList
                ],
                eventPage: action.eventPage,
                loadNext: false
            }
        }

    case NEXT_LOAD:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                loadNext: action.loadNext,
            }
        }

    case SELECT_EVENT:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                loadingStatus: action.loadingStatus,
                selectedEvent: action.selectedEvent
            }
        }

    case EVENT_FIGHTERS:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                fighterList: action.fighterList,
                loadingStatus: false,
                progress: 0
            }
        }     

    case PAST_EVENT_SAVED:
        let selIndex = state.pastEvents.selectedEvent.index;
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                loadingStatus: false,
                pastEventsList: [
                    ...state.pastEvents.pastEventsList[selIndex].ownEvent = true, 
                    ...state.pastEvents.pastEventsList,
                ]
            }
        }
        
    case PAST_INT_DATA:
        return {
            ...state,
            pastEvents:{
                ...state.pastEvents,
                collectStats: action.collectStats
            }
        }

    case ERROR_OCCURED:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                errorMessage: action.errorOccured
            }
        }
    
// ----------> Upcoming Event State <----------
    case UPCOMING_EVENT:
        return {
            ...state,
            upcomeEvent: {
                ...state.upcomeEvent,
                upcomeEvent: action.upcomeEvent
            }
        }

    case UPCOME_EVENT_SAVED:
        return {
            ...state,
            upcomeEvent: {
                ...state.upcomeEvent,
                loadingStatus: false,
            }
        }

        
// ----------> malicious actions <----------
    case HANDLE_INPUT_POINTS:
        let inputPoints = action.inputPoints;
        let inputOption = action.option;
        return {
            ...state,
            [inputOption]: {
                ...state[inputOption],
                inputPoints: {
                    ...state[inputOption].inputPoints,
                    [inputPoints.name]: {
                        ...state[inputOption].inputPoints[inputPoints.name],
                        [inputPoints.placeholder]: inputPoints.value,
                    },
                }
            }
        }

    case PROGRESS_LOADING:
        let progOption = action.option;
        return {
            ...state,
            [progOption]: {
                ...state[progOption],
                progress: state[progOption].progress + action.progress,
                loadMessage: state.loadMessage !== action.loadMessage ? action.loadMessage : '',
                loadingStatus: action.loadingStatus
            }
        }

        
        default:
            return state;
    
    };
};

export default dataCenter;