import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ISSUE_DETAILS } from './constants';
import {
  getIssueDetailsSuccess,
  getIssueDetailsError,
} from './actions';

const fetchIssueDetailJson = (args) => {
    return fetch("https://api.github.com/repos/vmg/redcarpet/issues/"+args.params)
        .then( resp => {
            return resp.json().then( data => {
                return data;
            })
        })
        .catch((e)=>{
            console.log("ERROR LOADING FILE", e);
        })
};

function* getIssueDetails(args) {
    if(args.args !== undefined) {
        try {
            const products = yield call(fetchIssueDetailJson, {params: args.args});
            yield put(getIssueDetailsSuccess(products));
        } catch (e) {
            return yield put(getIssueDetailsError());
        }
    }
}

export function* sagasDetails() {
  yield takeEvery(FETCH_ISSUE_DETAILS, getIssueDetails);
}

export default sagasDetails;

