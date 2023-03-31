import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import filter from 'redux-persist-transform-filter';
import thunkMiddleware from 'redux-thunk';

import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import { LOCAL_STORAGE_KEY } from '../constants';

const saveSubsetFilter = filter('user', ['token']);

const persistConfig = {
	key: LOCAL_STORAGE_KEY,
	storage,
	transforms: [saveSubsetFilter],
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(
	persistReducer(persistConfig, rootReducer),
	composedEnhancer
);

export let persistor = persistStore(store);
