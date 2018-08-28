import {
    FETCH_ISSUE_LIST,
    FETCH_ISSUE_LIST_SUCCESS,
    FETCH_ISSUE_LIST_ERROR,
  } from './constants';
  
  export function getIssueList() {
    return {
      type: FETCH_ISSUE_LIST,
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
  