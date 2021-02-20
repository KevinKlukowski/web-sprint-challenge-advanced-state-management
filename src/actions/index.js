import axios from 'axios';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const addSmurfs = () => dispatch => {
  console.log('addSmurfs is starting');
  axios.post('http://localhost:3333/smurfs', {name: 'Kevin', nickname: 'KAI', description: ''})
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: ADD_SMURFS_FAIL, payload: err})
    })

}

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START});
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err})
    })
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.