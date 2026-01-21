import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  	initialState: {
		formErrors: '',
		useremail: '',
		userpass: '',
        userName: '',
		buttonLoading: false,
        userInfo: {},
		resetRefreshToken: '',
	},
  reducers: {
    setFormErrors: (state, action: PayloadAction<string>) => {
      state.formErrors = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
        state.useremail = action.payload;
    },
    setUserPass: (state, action: PayloadAction<string>) => {
        state.userpass = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
        state.userName = action.payload;
    },
    setButtonLoading: (state, action: PayloadAction<boolean>) => {
        state.buttonLoading = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<object>) => {
        state.userInfo = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
        state.resetRefreshToken = action.payload;
    }
  },
});

export const { setFormErrors, setUserEmail, setUserPass, setUserName, setButtonLoading, setUserInfo, setRefreshToken } = authSlice.actions;

// selector
export const selectFormErrors = (state: any) => state.auth.formErrors;
export const selectUserEmail = (state: any) => state.auth.useremail;
export const selectUserPass = (state: any) => state.auth.userpass;
export const selectUserName = (state: any) => state.auth.userName;
export const selectButtonLoading = (state: any) => state.auth.buttonLoading;
export const selectUserInfo = (state: any) => state.auth.userInfo;
export const selectRefreshToken = (state: any) => state.auth.resetRefreshToken;

export default authSlice.reducer;
