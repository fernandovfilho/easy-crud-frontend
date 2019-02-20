import { FETCH_TALENTS, FETCH_TALENT, NEW_TALENT, REMOVE_TALENT, UPDATE_TALENT } from '../actions/types';



const initialState = {
    items: [],
    item: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TALENTS:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_TALENT:
        return {
            ...state,
            item: action.payload
        };
        case NEW_TALENT:
        return {
            ...state,
            new: action.payload
        };
        case UPDATE_TALENT:
        return {
            ...state,
            update: action.payload
        };
        case REMOVE_TALENT:
        return {
            ...state,
            removed: action.payload
        };
        default:
        return state;
    }
    
}
