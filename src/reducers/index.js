import counterReducer from './reducer/counter';
import loggedReducer from './reducer';
import { combineReducers  } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    logger: loggedReducer,
})

export default allReducers;