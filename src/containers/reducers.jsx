import { fromJS } from 'immutable';
import {
  FETCH_ISSUE_LIST,
  FETCH_ISSUE_LIST_ERROR,
  FETCH_ISSUE_LIST_SUCCESS,
} from './constants';

const initialState = fromJS({
  data: [],
  error: null,
});

const gitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUE_LIST:
      return Object.assign({}, state, {error : null});
    case FETCH_ISSUE_LIST_SUCCESS:
      return Object.assign({}, state, {data : action.data});
    case FETCH_ISSUE_LIST_ERROR:
      return Object.assign({}, state, {error : 'error'});
    default:
      return state;
  }
}

export default gitReducer;

