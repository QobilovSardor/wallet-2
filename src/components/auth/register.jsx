import React, { useState } from 'react';
import { Input } from '../ui'
import assets from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authUserFailure, authUserStart, authUserSuccess } from '../../slice/auth';
import { AuthServices } from '../../services/auth';
import { Error } from '../../errors/error';

export const Register = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { isLoading } = useSelector(state => state.auth)
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const registerHandler = async e => {
		e.preventDefault();
		dispatch(authUserStart());
		const userData = { fullName, email, password }
		
		try {
			const response = await AuthServices.authPost('register/', userData);
			dispatch(authUserSuccess(response));
			navigate('/home');
		} catch (error) {
			dispatch(authUserFailure(error.response.data.message));
		}
	}

	return (
		<div className="bg-primary h-screen flex flex-col justify-end">
			<div className="text-center space-y-4 relative">
				<div className='bg-white py-7 px-6 rounded-full w-fit inline-block'>
					<img src={assets.logo} alt="logo" />
				</div>
				<h3 className='text-3xl font-semibold capitalize text-white'>wallet</h3>
				<div className='absolute w-full z-0 top-0'>
					<img src={assets.bottomIcon} alt="bottom-icon" width='100%' />
				</div>
			</div>
			<form onSubmit={registerHandler} className="mt-8 bg-white flex flex-col justify-end h-100 px-6 pt-11 pb-4 rounded-t-2xl">
				<h2 className="text-2xl font-bold mb-6">Ro'yxatdan o'tish</h2>

				<Error />

				<div className="space-y-5">
					<Input
						type="text"
						name="fullName"
						state={fullName}
						setState={setFullName}
						placeholder="Isim Familiyangizni kiriting"
					/>
					<Input
						type="email"
						name="email"
						state={email}
						setState={setEmail}
						placeholder="Emailingizni kiriting"
					/>
					<Input
						type="password"
						name="password"
						state={password}
						setState={setPassword}
						placeholder="Parolingizni kiriting"
					/>
					<button disabled={!fullName || !email || !password || isLoading ? true : false} className="w-full py-4 px-2 bg-orange text-white rounded-md" type="submit">
						{isLoading ? "Yuborilmoqda..." : "Ro'yhatdan o'tish"}
					</button>
				</div>

				<div className="flex items-center justify-center mt-6 space-x-2 text-sm">
					<span className="text-gray-1">Hisobingiz bormi?</span>
					<Link to={'/login'} className="text-orange">
						Tizimga kirish
					</Link>
				</div>
			</form>
		</div>
	)
}
