import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import shoppingListReducer from './shoppingListSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['items'], // Only persist the items array
};

const persistedReducer = persistReducer(persistConfig, shoppingListReducer);

export const store = configureStore({
  reducer: {
    shoppingList: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
