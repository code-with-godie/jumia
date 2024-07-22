import userReducer from './userSlice';
import cartReducer from './cartSlice';
import appReducer from './appSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    app: appReducer,
  },
});
