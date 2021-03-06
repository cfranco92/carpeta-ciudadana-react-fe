import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authenticationApi } from "../services/authentication";
import { configureStore } from "@reduxjs/toolkit";
import { documentsApi } from "../services/documents";
import { loginApi } from "../services/login";
import rootReducer from "./rootReducer";
import { usersApi } from "../services/users";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(loginApi.middleware)
      .concat(authenticationApi.middleware)
      .concat(documentsApi.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
