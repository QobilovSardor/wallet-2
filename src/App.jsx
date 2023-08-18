import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivatePouts } from './components/routes/private-routs';
import {Home, Profile, UpdateProfile } from './components/ui';
import { Login, Register } from './components/auth';
import {Intro, NoteFound} from './pages' 


export const App = () => {
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
