import axios from 'axios';
import { 
    GET_LISTS, 
    ADD_LIST, 
    DELETE_LIST, 
    LISTS_LOADING,
    ADD_SONGS,
    DELETE_SONG } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getLists = () => dispatch => {
    dispatch(setListsLoading());
    axios
        .get('/api/lists')
        .then(res => 
            dispatch({
                type:GET_LISTS,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addList = list => (dispatch, getState) => {
    axios
        .post('/api/lists', list, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_LIST,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteList = id => (dispatch, getState) => {
    axios.delete(`/api/lists/${id}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: DELETE_LIST,
                payload: id
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setListsLoading = () => {
    return {
        type: LISTS_LOADING
    };
};

export const addSongs = list => (dispatch, getState) => {
    axios.post('/api/lists/songs/post', list, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_SONGS,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteSong = (id, song) => (dispatch, getState) => {
    axios.delete(`/api/lists/songs/${id}/${song}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: DELETE_SONG,
                payload: {id, song}
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};