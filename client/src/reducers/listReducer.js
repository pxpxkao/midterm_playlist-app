import { 
    GET_LISTS, 
    ADD_LIST, 
    DELETE_LIST, 
    LISTS_LOADING, 
    ADD_SONGS, 
    DELETE_SONG } from '../actions/types';
import { merge } from 'lodash'

const initialState = {
    lists: [],
    loading: false
}

export default function(state = initialState, action) {
    let newState = merge({}, state);
    switch(action.type) {
        case GET_LISTS:
            return {
                ...newState,
                lists: action.payload,
                loading: false
            };
        case ADD_LIST:
            return {
                ...state,
                lists: [action.payload, ...state.lists]
            };
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            };  
        case LISTS_LOADING:
            return {
                ...state,
                loading: true
            }; 
        case ADD_SONGS:
            return {
                ...state,
                lists: state.lists.map(list => {
                    if(list._id === action.payload.id) {
                        return { ...list, songs: [...list.songs, ...action.payload.songs] }
                    }
                    return list
                })
            };
        case DELETE_SONG:
            return {
                ...state,
                lists: state.lists.map(list => {
                    if(list._id === action.payload.id) {
                        return { ...list, songs: list.songs.filter(song => song !== action.payload.song) }
                    }
                    return list
                })
            };
        default:
            return state;
    }
};
