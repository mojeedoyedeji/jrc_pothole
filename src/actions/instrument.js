import {defaultHandler} from '../requests/global.js';
import {unexpectedError, wait, notify} from './index';
import {FETCH_DATA} from '../constants/instrument';


export function getData(){
  const url = '/app/receive';
  return async dispatch => {
    dispatch(wait(true))
      const [res, status] = await defaultHandler(url, {});
      if(status == "ok"){
        if(res.response != null){
          dispatch(fetchData(res.response));
          console.log(res)
        }else{
        }
      }else{
        dispatch(unexpectedError())
      }
      dispatch(wait(false))
    };
}


export function fetchData(payload){
  return { type: FETCH_DATA, payload }
}






