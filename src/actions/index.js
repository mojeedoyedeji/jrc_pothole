import {INITIALIZE, PROFILE_UPDATE, REGISTER_SUCCESS, CLEAR_NOTIFY,
    WAIT, NOTIFY, UNEXPECTED_ERROR, LOGIN_SUCCESS, AUTH, SLOT, FETCH_CONTACTS,
    FETCH_PLACES} from '../constants/types';
  
  
  export function initialize(payload){
    return { type: INITIALIZE, payload }
  }
  
  export function unexpectedError(payload){
    return { type: UNEXPECTED_ERROR, payload }
  }
  
  export function wait(payload){
    return { type: WAIT, payload }
  }
  
  export function notify(payload){
    return { type: NOTIFY, payload }
  }
  
  export function loginSuccess(payload){
    return { type: LOGIN_SUCCESS, payload }
  }
  
  export function profileUpdate(payload){
    return { type: PROFILE_UPDATE, payload }
  }
  
  export function registerSuccess(payload){
    return { type: REGISTER_SUCCESS, payload }
  }
  
  export function auth(payload){
    return { type: AUTH, payload }
  }
  
  export function slot(payload){
    return { type: SLOT, payload }
  }
  
  export function fetchContacts(payload){
    return { type: FETCH_CONTACTS, payload }
  }
  
  export function fetchPlaces(payload){
    return { type: FETCH_PLACES, payload }
  }
  
  export function clearNotify(payload){
    return { type: CLEAR_NOTIFY, payload }
  }

