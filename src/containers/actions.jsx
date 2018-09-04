import {
    FETCH_ISSUE_LIST,
    FETCH_ISSUE_LIST_SUCCESS,
    FETCH_ISSUE_LIST_ERROR,
    FETCH_ISSUE_STATE,
    FETCH_ISSUE_STATE_SUCCESS,
    FETCH_ISSUE_STATE_ERROR
  } from './constants';
  
  export function getIssueList(args) {
    return {
      type: FETCH_ISSUE_LIST,
      args
    };
  }
  
  export function getIssueListSuccess(data) {
    return {
      type: FETCH_ISSUE_LIST_SUCCESS,
      data,
    };
  }
  
  export function getIssueListError(error) {
    return {
      type: FETCH_ISSUE_LIST_ERROR,
      error,
    };
  }

  export function getIssueStateList() {
    return {
      type: FETCH_ISSUE_STATE,
    };
  }
  
  export function getIssueStateListSuccess(data) {
    return {
      type: FETCH_ISSUE_STATE_SUCCESS,
      data,
    };
  }
  
  export function getIssueStateListError(error) {
    return {
      type: FETCH_ISSUE_STATE_ERROR,
      error,
    };
  }
  