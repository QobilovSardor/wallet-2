import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	categories: [],
	error: null,
	date: null,
	startDate: null,
	endDate: null,
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		getCategoryStart: state => {
			state.isLoading = true;
		},
		getCategorySuccess: (state, action) => {
			state.isLoading	= false;
			state.categories = action.payload;
		},
		getCategoryFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		getDate: (state, action) => {
			state.date = action.payload;
		},
		setFormattedStartDate: (state, action) => {
			const startDate = new Date(action.payload);
			const DD = action.payload.getDate() < 10 ? '0' + action.payload.getDate() : action.payload.getDate();
			const MM = (action.payload.getMonth() + 1) < 10 ? '0' + (action.payload.getMonth() + 1) : (action.payload.getMonth() + 1);
			const YY = action.payload.getFullYear();
		console.log(DD + MM + YY, 'setForm action');
			return YY + '-' + MM + '-' + DD;
		},
	} 
})

export const { getCategoryStart, getCategorySuccess, getCategoryFailure, getDate } = categorySlice.actions
export default categorySlice.reducer