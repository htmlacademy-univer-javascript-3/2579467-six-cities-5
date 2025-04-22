import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/types';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

type AuthState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  }
});

export const { setAuthorizationStatus, setUserData } = authSlice.actions;
export default authSlice.reducer;
