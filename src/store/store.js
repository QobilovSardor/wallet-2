import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthReducer from '../slice/auth'
import CategoryReducer from '../slice/category';

export default configureStore({
	reducer: {
		auth: AuthReducer,
		categories: CategoryReducer
	},
	devTools: process.env.NODE_ENV !== 'production',
})