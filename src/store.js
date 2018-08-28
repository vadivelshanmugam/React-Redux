import { fromJS } from 'immutable';
import rootReducer from '../src/containers/reducers';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import sagas from '../src/containers/sagas';

const sagaMiddleWare = createSagaMiddleware();

const initialState = fromJS({
    data: [],
    error: null,
});  

//const Store = createStore(reducers,  initialState, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(thunk) );
//const Store = createStore(reducers,  initialState,  applyMiddleware(thunk) );
const Store = createStore(rootReducer,  initialState,  applyMiddleware(sagaMiddleWare) );

sagaMiddleWare.run(sagas);

export default Store;