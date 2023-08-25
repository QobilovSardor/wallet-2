import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivatePouts } from './components/routes/private-routs';
import { Home, Profile, UpdateProfile } from './components/ui';
import { Login, Register } from './components/auth';
import { Intro, NoteFound } from './pages'
import { useDispatch } from 'react-redux';
import { AuthServices, CategoryServices } from './services';
import { getToken } from './helpers/persistent-storage';
import { authUserSuccess } from './slice/auth';
import { getCategoryFailure, getCategoryStart, getCategorySuccess } from './slice/category';
import { Demo } from './demo/date'

export const App = () => {
	const dispatch = useDispatch();
	const [date, setDate] = useState();

	const startDate = new Date();
	startDate.setDate(1);
	const endData = new Date();
	endData.setDate(1);
	endData.setDate(endData.getMonth() + 1);
	console.log(endData);
	useEffect(() => {
		const DD = startDate.getDate() < 10 ? '0' + startDate.getDate() : startDate.getDate();
		const MM = startDate.getMonth() < 10 ? '0' + startDate.getMonth() : startDate.getMonth();
		const YY = startDate.getFullYear();
		setDate(YY + '-' + MM + '-' + DD)
	}, [])

	const getUser = async () => {
		try {
			const response = await AuthServices.getProfile()
			dispatch(authUserSuccess(response))
		} catch (error) {
			dispatch(authUserError(error))
		}
	}

	const getCategories = async () => {
		dispatch(getCategoryStart());
		try {
			const category = await CategoryServices.getTransition(`?dateStart=2023-07-21&dateEnd=2023-09-22`);
			console.log('category', category);
			// const category = await CategoryServices.getTransition(`?dateStart=2023-07-21&dateEnd=2023-09-22`);
				dispatch(getCategorySuccess(category?.data?.data))
		} catch (error) {
			dispatch(getCategoryFailure(error))
		}
	}

	useEffect(() => {
		const token = getToken('token');
		if (token) getUser();
		getCategories();		
	}, [])


	return (
		<Routes>
			<Route path='/user' element={<Demo />} />
			<Route element={<PrivatePouts />}>
				<Route path='/home' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/update-profile' element={<UpdateProfile getUser={getUser} />} />
			</Route>
			<Route path='/' element={<Intro />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='*' element={<NoteFound />} />
		</Routes>
	)
}
