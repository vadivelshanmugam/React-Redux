import { fork } from 'redux-saga/effects';

import saga from '../src/containers/sagas';
import saga2 from '../src/containers/IssueDetails/sagas';

export function* rootSaga () {
    yield [
        fork(saga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(saga2),
    ];
}