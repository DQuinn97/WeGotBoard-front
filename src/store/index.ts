import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
const weGotBoard = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default weGotBoard;
export type RootState = ReturnType<typeof weGotBoard.getState>;
export type AppDispatch = typeof weGotBoard.dispatch;
