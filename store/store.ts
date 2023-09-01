import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from './slices/user';
import { authMiddleware } from '../middlewares/auth';

const middleware = [...getDefaultMiddleware(), authMiddleware];

export const store = configureStore({
  reducer: {
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
