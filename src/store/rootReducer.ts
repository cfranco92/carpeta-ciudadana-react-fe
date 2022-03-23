import accountReducer from "./account";
import { authenticationApi } from "../services/authentication";
import { combineReducers } from "@reduxjs/toolkit";
import { documentsApi } from "../services/documents";
import { loginApi } from "../services/login";
import { usersApi } from "../services/users";

const rootReducer = combineReducers({
  account: accountReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [documentsApi.reducerPath]: documentsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
