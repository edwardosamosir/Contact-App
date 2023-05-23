//Action Creator atau kumpulan function yang mengembalikan object action

import { baseUrl } from "../../config/api"
import {
    CONTACTS_ERROR,
    CONTACTS_FETCH_ALL,
    CONTACTS_FETCH_ID,
    CONTACTS_FETCH_LOADING,
    CONTACTS_ADD_LOADING,
    CONTACTS_ADD_RESPONSE,
    CONTACTS_UPDATE
} from "./actionType";

  export const fetchContactsLoading = () => {
    return {
        type: CONTACTS_FETCH_LOADING,
        payload: false
    }
  }

  export const fetchContacts = () => {
    return (dispatch) => {
      dispatch({type : CONTACTS_FETCH_LOADING, payload : true})
      fetch( baseUrl )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("something wrong");
          }
        })
        .then((data) => {
          dispatch({ type: CONTACTS_FETCH_ALL, payload: data });
        })
        .catch((error) => {
          dispatch({ type: CONTACTS_ERROR, payload: error?.message });
        })
        .finally(() => {
          const action = fetchContactsLoading()
          dispatch(action)
      });
    };
  };


  