import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivatePouts } from './components/routes/private-routs';
import { Home, Profile, UpdateProfile } from './components/ui';
import { Login, Register } from './components/auth';
import { Intro, NoteFound } from './pages'
import { useDispatch } from 'react-redux';
import { AuthServices } from './services/auth';
import { getToken } from './helpers/persistent-storage';
import { authUserSuccess } from './slice/auth';


export const App = () => {
	const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthServices.getProfile()
			dispatch(authUserSuccess(response))
		} catch (error) {
			dispatch(authUserError(error))
		}
	}

	useEffect(() => {
		const token = getToken('token')
		if (token) getUser()
	}, [])

	return (
		<Routes>
			<Route element={<PrivatePouts />}>
				<Route path='/home' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/update-profile' element={<UpdateProfile />} />
			</Route>
			<Route path='/' element={<Intro />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='*' element={<NoteFound />} />
		</Routes>
	)
}
