import { SEARCH_QUERY } from "../action/actionType";

const defaultState = {
    query : ""
}

export default function customReducer(state = defaultState, action){
    switch (action.type) {
        case SEARCH_QUERY : 
            return {
                ...state,
                query : action.payload
            }
        default : 
            return state
    }
}