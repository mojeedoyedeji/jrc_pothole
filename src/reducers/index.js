import {combineReducers} from "redux";
import {INITIALIZE, UNEXPECTED_ERROR, WAIT, CLEAR_NOTIFY,
  NOTIFY, PROFILE_UPDATE} from  "../constants/index";
import instrumentReducer from './instrument';

const initialState = {
  loading: false,
  notify:{
    message: "",
    status: "",
    open: false
  },
  content: "Starboard"
};

function mainReducer(state = initialState, action) {
  switch (action.type){
    case INITIALIZE:
      return Object.assign({}, state, {
         loading: false,
         loggedIn: false,
       });
   case UNEXPECTED_ERROR:
     return Object.assign({}, state, {
       notify:{
         message: "unexpected error occured",
         status: "error",
       },
      });
    case WAIT:
      return Object.assign({}, state, {
        loading: action.payload
      });
   case NOTIFY:
     return Object.assign({}, state, {
       notify: {
         ...action.payload,
         open: true,
       }
     });
    case CLEAR_NOTIFY:
      return Object.assign({}, state, {
        notify: {
          open: false,
          message: "",
          status: "",
        }
      });
  }
  return state;
}

const rootReducer = combineReducers({
    app: mainReducer,
    instrument: instrumentReducer,
});

export default rootReducer;
