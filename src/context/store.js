import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import appReducer from './appSlice';
import cartReducer from './cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'jumia',
  storage,
};

const rootReducers = combineReducers({
  user: userReducer,
  app: appReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     cart: cartReducer,
//     app: appReducer,
//   },
// });
