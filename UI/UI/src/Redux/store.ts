import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Features/counterSlice';
import logger from './middlewares/logger';
import taskReducer from './Features/Task/TaskSlice';


export const store= configureStore({
    reducer:{
        counter: counterReducer,
        task: taskReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
