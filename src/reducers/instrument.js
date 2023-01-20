import {FETCH_DATA} from  "../constants/instrument";


const initialState = {
  data:{
  },
  customers:[]
};

function reducer(state = initialState, action) {
  switch (action.type){
    case FETCH_DATA:
      return Object.assign({}, state, {
         data: action.payload
       });
  }
  return state;
}

export default reducer;
