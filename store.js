import {createStore, combineReducers} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducers from './reducers/userReducers';
import favouriteReducers from './reducers/favouriteReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({ 
    user:  persistReducer(persistConfig, userReducers),
    favourite:  persistReducer(persistConfig, favouriteReducers),
  })

export const store = createStore(rootReducer)
export const persistor = persistStore(store)
