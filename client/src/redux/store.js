import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; 
import { getProductsReducer, getProductDetailesReducer } from './reducer/productreducer';



const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetailes:getProductDetailesReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
