import { CONTACTS_FETCH_ALL, CONTACTS_FETCH_ID, CONTACTS_UPDATE, CONTACTS_FETCH_LOADING,CONTACTS_ERROR } from "../action/actionType"

const defaultState = {
    contacts: [],
    contactDetail: null,
    loading: true,
    updateStatus: null,
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
                contactDetail: action.payload.data
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