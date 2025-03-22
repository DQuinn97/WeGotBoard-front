import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import counterReducer from "./counterSlice";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import cartReducer from "./cartSlice";
import productAPI from "./productAPI";
import filterReducer from "./filterSlice";
import newsAPI from "./newsAPI";

const persistConfig = {
  key: "wgb_root",
  storage,
  whitelist: ["cartSlice"],
};

const rootReducer = combineReducers({
  counterSlice: counterReducer,
  cartSlice: cartReducer,
  filter: filterReducer,
  [productAPI.reducerPath]: productAPI.reducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const weGotBoard = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(logger, productAPI.middleware, newsAPI.middleware),
});

export default weGotBoard;
export type RootState = ReturnType<typeof weGotBoard.getState>;
export type AppDispatch = typeof weGotBoard.dispatch;
export const persistor = persistStore(weGotBoard);
