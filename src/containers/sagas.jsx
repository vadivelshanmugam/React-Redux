import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ISSUE_LIST } from './constants';
import {
  getIssueListSuccess,
  getIssueListError,
} from './actions';

const fetchIssueJson = (args) => {
    console.log("args", args)
    let params = "";
    if(args.params !== undefined && isNaN(args.params)) {
        params = "?state="+args.params;
    } else {
        params = "";
    }
    return fetch("https://api.github.com/repos/vmg/redcarpet/issues"+params)
        .then( resp => {
            return resp.json().then( data => {
                return data;
            })
        })
        .catch((e)=>{
            console.log("ERROR LOADING FILE", e);
        })
};

function* getIssueList(args) {
    try {
        const products = yield call(fetchIssueJson, {params: args.args});
        yield put(getIssueListSuccess(products));
    } catch (e) {
        return yield put(getIssueListError());
    }
}

export function* sagas() {
  yield takeEvery(FETCH_ISSUE_LIST, getIssueList);
}

export default sagas;
