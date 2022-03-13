import accountReducer from "./account";
import { combineReducers } from "@reduxjs/toolkit";
import { loginApi } from "../services/login";

const rootReducer = combineReducers({
  account: accountReducer,
  [loginApi.reducerPath]: loginApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
