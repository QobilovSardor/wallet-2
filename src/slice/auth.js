import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../helpers/persistent-storage";

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authUserStart: state => {
			state.isLoading = true;
		},
		authUserSuccess: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload.data.data;
			state.error = null;
			setToken('token', `Bearer ${action.payload.data.data.token}`);
		},
		authUserFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload
		},
		logOut: state => {
			state.user = null;
			state.loggedIn = false;
		}
	}
})

export const {authUserStart, authUserSuccess, authUserFailure} = authSlice.actions
export default authSlice.reducer