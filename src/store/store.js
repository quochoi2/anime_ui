import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import boardReducer from './slices/boardSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        board: boardReducer,
        user: userReducer,
    },
});
