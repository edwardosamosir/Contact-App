import { combineReducers } from "redux"
import contactsReducer from "./contactsReducer"
import customReducer from "./customReducer"

const rootReducer = combineReducers({
    contact : contactsReducer,
    custom : customReducer
})

export default rootReducer