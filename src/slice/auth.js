import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	error: null,
	isLoading: false,
	loggedIn: false,
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authUserStart: state => {
			state.isLoading = true;
		},
		authUserSuccess: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
			state.loggedIn = true;
		},
		authUserFailure: (state, action) => {
			state.isLoading = false;
			state.user = null;
			state.error = action.payload
		}
	}
})

export const {authUserStart, authUserSuccess, authUserFailure} = authSlice.actions
export default authSlice.reducer