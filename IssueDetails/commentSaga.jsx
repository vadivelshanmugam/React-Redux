import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENT_DETAILS } from './constants';
import {
  getCommentDetailsSuccess,
  getCommentDetailsError
} from './actions';

const fetchCommentJson = (args) => {
    return fetch("https://api.github.com/repos/vmg/redcarpet/issues/"+args.params+"/comments")
        .then( resp => {
            return resp.json().then( data => {
                return data;
            })
        })
        .catch((e)=>{
            console.log("ERROR LOADING FILE", e);
        })
};

function* getCommentDetails(args) {
    if(args.args !== undefined) {
        try {
            const products = yield call(fetchCommentJson, {params: args.args});
            yield put(getCommentDetailsSuccess(products));
        } catch (e) {
            return yield put(getCommentDetailsError());
        }
    }
}

export function* sagasComment() {
  yield takeEvery(FETCH_COMMENT_DETAILS, getCommentDetails);
}

export default sagasComment;

