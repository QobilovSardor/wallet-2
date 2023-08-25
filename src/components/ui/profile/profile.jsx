import React, { useEffect, useState } from 'react'
import assets from '../../../assets';
import { Footer } from '../../layouts/footer';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../../../helpers/persistent-storage';
import { authUserFailure, authUserSuccess, logOut } from '../../../slice/auth';
import { AuthServices } from '../../../services/auth';

export const Profile = () => {
	const {user} = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOutHandler = () => {
		dispatch(logOut())
		removeToken('token');
		navigate('/')
	}

	const getUser = async () => {
		try {
			const response = await AuthServices.getProfile()
			dispatch(authUserSuccess(response))
		} catch (error) {
			dispatch(authUserFailure(error))
		}
	}
	useEffect(() => {
		getUser();
	}, [])

	return (
		<div className='relative flex flex-col justify-between h-screen'>
			<div>
				<div className='relative bg-primary min-h-[140px] bg-no-repeat bg-cover'></div>
				<div className="container relative">
					<Link to='/update-profile' className='absolute top-[-40px] bg-white flex items-center space-x-4 shadow-xl p-4 w-full rounded-lg z-10'>
						<div className='rounded-full p-3 bg-gray-100'>
							<img src={assets.user} alt="user icon" />
						</div>
						<div>
							<h3 className='text-lg font-semibold'>{user?.fullName || 'Yuklanmoqda'}</h3>
							<p className='text-gray-500 text-sm'>Profilni tahrirlash uchun shu yerni bosing</p>
						</div>
					</Link>
					<div className='relative z-10 pt-36'>
						<button onClick={logOutHandler} className='flex items-center justify-between bg-warning rounded-lg text-white p-4 w-full'>
							<div className='flex items-center space-x-3'>
								<img src={assets.logOut} alt="log out img" />
								<p className='capitalize'>Log Out</p>
							</div>
							<img src={assets.right} alt="right icon" />
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
