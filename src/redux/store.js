import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { teachersReducer } from "./teachers/teachersSlice";
import { authReducer } from "./auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage, 
  whitelist: ["user", "isLoggedIn"],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        teachers: teachersReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store);