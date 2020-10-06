import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './rootreducer';

export function configurStor() {

    return createStore(rootReducer , devToolsEnhancer())
}