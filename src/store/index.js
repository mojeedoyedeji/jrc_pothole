import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';


function loadState(){
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};


function saveState (state) {
  try {
    const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e)
  }
};


const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk),
);

store.subscribe(throttle(() => {
  saveState({
    instrument: store.getState().instrument,
    notify: {
      message: "",
      status: "",
    },
    loading: store.getState().app.loading,
    app: store.getState().app,
  });
}, 1000));


export default store;
