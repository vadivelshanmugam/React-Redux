import {
    FETCH_ISSUE_DETAILS,
    FETCH_ISSUE_DETAILS_SUCCESS,
    FETCH_ISSUE_DETAILS_ERROR,
  } from './constants';
  
  export function getIssueDetails(args) {
    return {
      type: FETCH_ISSUE_DETAILS,
      args,
    };
  }
  
  export function getIssueDetailsSuccess(data) {
    return {
      type: FETCH_ISSUE_DETAILS_SUCCESS,
      data,
    };
  }
  
  export function getIssueDetailsError(error) {
    return {
      type: FETCH_ISSUE_DETAILS_ERROR,
      error,
    };
  }
  