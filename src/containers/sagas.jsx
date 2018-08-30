import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ISSUE_LIST } from './constants';
import {
  getIssueListSuccess,
  getIssueListError,
} from './actions';

const fetchProductsJson = () => {
    return fetch("https://api.github.com/repos/vmg/redcarpet/issues")
        .then( resp => {
            return resp.json().then( data => {
                return data;
            })
        })
        .catch((e)=>{
            console.log("ERROR LOADING FILE", e);
        })
};

function* getIssueList() {
    try {
        const products = yield call(fetchProductsJson);
        yield put(getIssueListSuccess(products));
    } catch (e) {
        return yield put(getIssueListError());
    }
}

export function* sagas() {
  yield takeEvery(FETCH_ISSUE_LIST, getIssueList);
}

export default sagas;
