import {combineReducers} from 'redux';
import reducer from '../reducers/reducerRoot';
import bookReducer from '../reducers/redcuerBooks';

const rootReducer = combineReducers({
    books :bookReducer , 
    count : reducer

})

export default rootReducer