import { CONTACTS_FETCH_ALL, CONTACTS_FETCH_ID, CONTACTS_UPDATE, CONTACTS_FETCH_LOADING, CONTACTS_ADD_LOADING, CONTACTS_ADD_RESPONSE, CONTACTS_ERROR } from "../action/actionType"

const defaultState = {
    contacts: [],
    contactDetail: null,
    loading: true,
    updateStatus: null,
    contactResponse: null,
    errorMessage: ''
}

function contactsReducer(state = defaultState, action) {
    switch (action.type) {
        case CONTACTS_FETCH_ALL:
            return {
                ...state,
                contacts: action.payload
            }
        case CONTACTS_FETCH_ID:
            return {
                ...state,
                contactDetail: action.payload
            }
        case CONTACTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CONTACTS_UPDATE:
            return {
                ...state,
                updateStatus: action.payload
            }
        case CONTACTS_ADD_RESPONSE:
            return {
                ...state,
                contactResponse: action.payload
            }
        case CONTACTS_ADD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CONTACTS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default contactsReducer