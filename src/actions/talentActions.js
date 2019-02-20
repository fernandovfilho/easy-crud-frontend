import { FETCH_TALENTS, NEW_TALENT, FETCH_TALENT, REMOVE_TALENT, UPDATE_TALENT } from './types';
import { URL_BASE } from '../vars'

// List all talents
export const fetchTalents = () => dispatch => {
    
    fetch(`${ URL_BASE }talent`)
    .then(res => res.json())
    .then(talents => dispatch({
        type: FETCH_TALENTS,
        payload: talents
    }));
    
}

// Remove one talent
// Param id = _id
export const removeTalent = (id) => dispatch => {
    
    fetch(`${ URL_BASE }talent/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(talent => dispatch({
        type: REMOVE_TALENT,
        payload: talent
    }));
    
}

// Confirm remove one talent
export const confirmRemoveTalent = () => dispatch => {
    
    dispatch({
        type: REMOVE_TALENT,
        payload: false
    });
    
}

// Get data from one talent
// 
export const fetchTalent = (id) => dispatch => {
    
    fetch(`${ URL_BASE }talent/${id}`)
    .then(res => res.json())
    .then(talent => dispatch({
        type: FETCH_TALENT,
        payload: talent
    }));
    
}

// Update data talent
export const updateTalent = (id, data) => dispatch => {
    
    fetch(`${ URL_BASE }talent/${id}`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then(talent => dispatch({
        type: UPDATE_TALENT,
        payload: talent
    }))

}

// Confirm update talent
export const confirmUpdateTalent = () => dispatch => {
    
    dispatch({
        type: UPDATE_TALENT,
        payload: false
    });
    
}

// create a new talent
export const createTalent = (data) => dispatch => {
    
    fetch(`${ URL_BASE }talent`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then(talent => dispatch({
        type: NEW_TALENT,
        payload: talent
    }))

}

// confirm create talent
export const confirmNewTalent = () => dispatch => {
    
    dispatch({
        type: NEW_TALENT,
        payload: false
    });
    
}

