import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employeeSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'

const persistConfig = {
  key: 'root',
  storage, 
};

const persistedReducer = persistReducer(persistConfig, employeeReducer);

const store = configureStore({
  reducer: {
    employees: persistedReducer, 
  },
});

export const persistor = persistStore(store);
export default store;
