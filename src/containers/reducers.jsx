import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import {
  FETCH_ISSUE_LIST,
  FETCH_ISSUE_LIST_ERROR,
  FETCH_ISSUE_LIST_SUCCESS,
  FETCH_ISSUE_DETAILS,
  FETCH_ISSUE_DETAILS_ERROR,
  FETCH_ISSUE_DETAILS_SUCCESS,
  FETCH_COMMENT_DETAILS,
  FETCH_COMMENT_DETAILS_ERROR,
  FETCH_COMMENT_DETAILS_SUCCESS,
} from './constants';

const initialState = fromJS({
  data: [],
  detail: null,
  comments: null,
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

const gitDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUE_DETAILS:
      return Object.assign({}, state, {error : null});
    case FETCH_ISSUE_DETAILS_SUCCESS:
      return Object.assign({}, state, {detail : action.data});
    case FETCH_ISSUE_DETAILS_ERROR:
      return Object.assign({}, state, {error : 'error'});
    default:
      return state;
  }
}

const gitCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_DETAILS:
      return Object.assign({}, state, {error : null});
    case FETCH_COMMENT_DETAILS_SUCCESS:
      return Object.assign({}, state, {comments : action.data});
    case FETCH_COMMENT_DETAILS_ERROR:
      return Object.assign({}, state, {error : 'error'});
    default:
      return state;
  }
}

export default combineReducers({
  gitData: gitReducer,
  gitDetail: gitDetailsReducer,
  gitComment: gitCommentReducer,
});