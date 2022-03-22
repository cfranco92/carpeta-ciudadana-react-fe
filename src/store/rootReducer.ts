import accountReducer from "./account";
import { authenticationApi } from "../services/authentication";
import { combineReducers } from "@reduxjs/toolkit";
import { filesApi } from "../services/files";
import { loginApi } from "../services/login";
import { usersApi } from "../services/users";

const rootReducer = combineReducers({
  account: accountReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [filesApi.reducerPath]: filesApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
