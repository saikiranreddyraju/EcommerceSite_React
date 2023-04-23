import { configureStore } from '@reduxjs/toolkit';
import bookSliceReducer from '../features/book/bookSlice';
import cartSliceReducer from '../features/cart/cartSlice';
import orderSliceReducer from '../features/order/orderSlice';
import titleSliceReducer from '../features/title/titleSlice';
import addressSliceReducer from '../features/address/addressSlice';
import bookDetailSliceReducer from '../features/bookDetail/bookDetailSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

/* Creating SagaMiddleware */
const sagaMiddleware = createSagaMiddleware();

/* Creating a store with required Reducers*/
const store = configureStore({
    reducer:{
        book: bookSliceReducer,
        title: titleSliceReducer,
        cart: cartSliceReducer,
        order: orderSliceReducer,
        address: addressSliceReducer,
        bookDetail: bookDetailSliceReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

/* RootState & AppDispatch are TypeScript type definitions that allow you to use the Redux store and its dispatch function. 
Infer the `RootState` and `AppDispatch` types from the store itself. */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;