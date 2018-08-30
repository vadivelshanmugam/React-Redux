import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import rootReducer from '../src/containers/reducers';

const sagaMiddleWare = createSagaMiddleware();

const initialState = fromJS({
    data: [],
    detail: null,
    error: null,
});  

//const Store = createStore(reducers,  initialState, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(thunk) );
//const Store = createStore(reducers,  initialState,  applyMiddleware(thunk) );
const Store = createStore(rootReducer, initialState,  compose(applyMiddleware(sagaMiddleWare), window.devToolsExtension ? window.devToolsExtension() : f => f) );

sagaMiddleWare.run(rootSaga);

export default Store;