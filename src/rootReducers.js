import { combineReducers } from 'redux';
import issueListReducer from '../src/containers/reducers';
import issueDetailReducer from '../src/containers/IssueDetails/reducers';

export default combineReducers({
 issueListReducer,
 issueDetailReducer,
})