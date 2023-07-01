import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import authReducer from './auth/authReducer';
import logger from 'redux-logger';
import booksReducer from './books/booksReducer';
import SingleBookReducer from './SingleBook/SingleBookReducer';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        books: booksReducer,
        singleBook: SingleBookReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : []))
})


export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
