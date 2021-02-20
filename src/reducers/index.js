import { ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL, FETCH_SMURFS_START, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    addError: '',
    fetchError: '',
  }

  const reducer = (state = initialState, action )=>{
    switch (action.type) {
      // case(ADD_SMURFS_START):
      //   console.log('Add smurf is starting');
      //   return({
      //     ...state,
      //     addError: '',
      //   });
      case(ADD_SMURFS_SUCCESS):
        return({
          ...state,
          smurfs: [...state.smurfs, action.payload],
        })
      case(ADD_SMURFS_FAIL):
        return({
          ...state,
          addError: action.payload
        })
      case(FETCH_SMURFS_START):
        return({
          ...state,
          smurfs: [],
          isFetching: true,
          fetchError: '',
        })
      case(FETCH_SMURFS_SUCCESS):
        return({
          ...state,
          isFetching: false,
          smurfs: action.payload,
        })
      case(FETCH_SMURFS_FAIL):
        return({
          ...state,
          fetchError: action.payload,
          isFetching: false,
        })
  
      default:
        return(state);
    }
  }
  
  export default reducer;

  


//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.