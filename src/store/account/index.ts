import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";
import { User } from "../../models/user";

export interface InitialAccountStateProps {
  user: Partial<User> | undefined;
  loggedIn: boolean;
}

const initialState: InitialAccountStateProps = {
  user: undefined,
  loggedIn: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loggedIn: action.payload,
      };
    },
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { setLoggedIn, setUser } = accountSlice.actions;
export const userAccount = (state: RootState) => state.account.user;
export const userLoggedIn = (state: RootState) => state.account.loggedIn;

export default accountSlice.reducer;
