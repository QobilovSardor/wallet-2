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
		authUserSuccess: state => {
			state.isLoading = false;
			state.user = state.user
		},
		authUserFailure: state => {

		}
	}
})

export const {authUserStart, authUserSuccess, authUserFailure} = authSlice.actions
export default authSlice.reducer