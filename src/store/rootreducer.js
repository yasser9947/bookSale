import {combineReducers} from 'redux';
import reducer from '../reducers/reducerRoot';
import bookReducer from '../reducers/redcuerBooks';
import userReducer from '../reducers/userInfo';

const rootReducer = combineReducers({
    books :bookReducer , 
    // count : reducer , 
    userDitals : userReducer

})

export default rootReducer