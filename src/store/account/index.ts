import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";
import { User } from "../../models/user";

export interface InitialAccountStateProps {
  user: User | undefined;
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
  },
});

export const { setLoggedIn } = accountSlice.actions;
export const userAccount = (state: RootState) => state.account.user;

export default accountSlice.reducer;
