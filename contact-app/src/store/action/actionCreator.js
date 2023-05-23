//Action Creator atau kumpulan function yang mengembalikan object action

import { baseUrl } from "../../config/api"
import {
    CONTACTS_ERROR,
    CONTACTS_FETCH_ALL,
    CONTACTS_FETCH_ID,
    CONTACTS_FETCH_LOADING,
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
            throw new Error("Internal Server Error");
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

  export const addContact = (payload) => {
    return (dispatch) => {
      dispatch({type : CONTACTS_FETCH_LOADING, payload : true})
      fetch( baseUrl, {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Internal Server Error");
          }
        })
        .catch((error) => {
          dispatch({type : CONTACTS_ERROR, payload : error?.message })
        })
        .finally( _ => {
          dispatch({type : CONTACTS_FETCH_LOADING, payload : false})
        })
    }
  }


  export const fetchDetailContact = (contactId) => {
    return (dispatch) => {
      fetch(`${baseUrl}/${contactId}`, {
        method: "GET"
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Internal Server Error");
          }
        })
        .then((data) => {
          dispatch({ type: CONTACTS_FETCH_ID, payload: data });
        })
        .catch((error) => {
          dispatch({ type: "error" });
        });
    };
  };

  export const updateContact = (payload, contactId) => {
    return (dispatch) => {
      dispatch({type : CONTACTS_FETCH_LOADING, payload : true})
      fetch(`${baseUrl}/${contactId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("something wrong");
          }
        })
        .catch((error) => {
          dispatch({type : CONTACTS_ERROR, payload : error?.message })
        })
        .finally(_=>{
          dispatch({type : CONTACTS_FETCH_LOADING, payload : false})
        })
    }
  }
  