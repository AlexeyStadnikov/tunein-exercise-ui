import { combineReducers } from 'redux'

import loadingReducer from './loading-reducer'
import errorReducer from './error-reducer'

import stationsReducer from './stations-reducer';

export default combineReducers({
    loading: loadingReducer,
    error: errorReducer,

    stations: stationsReducer,
});
