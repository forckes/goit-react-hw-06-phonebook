import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
	key: "contacts",
	storage,
	whitelist: ["contacts"]
};

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: {
		contacts: rootReducer.reducer
	}
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
	// 		}
	// 	})
});

// export const persistor = persistStore(store);
