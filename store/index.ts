import { configureStore, EnhancedStore, Store } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer, { RootState } from "./slice";

const devMode = process.env.NODE_ENV === "development";

const persistConfig = {
  key: "root",
  version: 1,
  blacklist: [], // persist 제외할 slice 추가
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: devMode,
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore<any> = (context: any) => setupStore(context);

export const persistor = persistStore(store);

export const wrapper = createWrapper<Store>(makeStore);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
