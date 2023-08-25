import React, { useRef, useState, useEffect } from 'react'
import { Input } from '../form';
import { Link } from 'react-router-dom';
import assets from '../../../assets';
import { useDispatch } from 'react-redux';
import { AuthServices } from '../../../services';
import { authUserFailure } from '../../../slice/auth';
import { Error } from '../../../errors/error';

export const UpdateProfile = (getUser = Function.prototype) => {
	const [success, setSuccess] = useState(false, '');
	const [fullName, setFullName] = useState('');
	const [pwd, setPwd] = useState('');
	const [oldPwd, setOldPwd] = useState('');
	const dispatch = useDispatch();
	const [updateMsg, setUpdateMsg] = useState('');
	const pwdData = { password: oldPwd, newPassword: pwd }
	const [isLoading, setIsLoading] = useState(false);

	const handlerSubmitName = async (e) => {
		e.preventDefault();
		setIsLoading(true)

		try {
			const response = await AuthServices.authPost('profile/update/fullname', { fullName })
			console.log(response);
			setUpdateMsg(response?.data?.message)
			setSuccess(true, response)
			setTimeout(() => {
				setSuccess(false)
			}, 3000);
			setFullName('');
			setIsLoading(false)
		} catch (error) {
			console.log(error);
			dispatch(authUserFailure(error));
		}
	}
	const handlerSubmitPwd = async (e) => {
		e.preventDefault();
		setIsLoading(true)

		try {
			const response = await AuthServices.authPost('profile/update/password', pwdData)
			console.log(response, 'pwd updated');
			setUpdateMsg(response?.data?.message)
			setSuccess(true, response)
			setTimeout(() => {
				setSuccess(false)
			}, 3000);
			setIsLoading(false);
		} catch (error) {
			console.log(error?.response?.data?.message, 'pwd');
			dispatch(authUserFailure(error?.response?.data?.message));
		}
	}

	return (
		<div className='relative'>
			<div className='bg-primary text-center flex items-center py-6 px-6 text-white mb-8'>
				<Link to='/profile'>
					<img src={assets.prevIcon} alt="" className='' />
				</Link>
				<p className='mx-auto font-medium'>Profil sozlamalari</p>
			</div>
			<div className='space-y-3 container'>
				<div className="rounded-full p-3 bg-gray-100 w-fit mx-auto mb-8">
					<img src={assets.user} alt="user icon" width='58px' height='58px' />
				</div>

				{success
					?
					<div className='bg-lime-500 p-3 rounded-lg text-white'>
						{updateMsg}
					</div>
					: null}
					<Error />
				<h3 className='text-xl text-orange text-center'>Isimni o'zgartirish</h3>
				<hr />
				<form onSubmit={handlerSubmitName} className='space-y-3'>
					<Input
						type="text"
						state={fullName}
						setState={setFullName}
						placeholder='Ism Familiyangizni kiriting'
					/>
					<button disabled={!fullName ? true : false} type='submit' className='rounded-lg bg-orange py-4 px-2 w-full text-white font-semibold'>{`${isLoading ? 'Yuklanmoqda...' : "O'zgarishlarni saqlash"}`}</button>
				</form>

				<h3 className='text-xl text-orange text-center'>Parolni o'zgartirish</h3>
				<hr />
				<form onSubmit={handlerSubmitPwd} className='space-y-3'>
					<Input
						type="password"
						state={oldPwd}
						setState={setOldPwd}
						placeholder='Eski parolingizni kiriting'
					/>

					<Input
						type="password"
						state={pwd}
						setState={setPwd}
						placeholder='Yangi parol kiriting'
					/>
					<button disabled={!pwd || !oldPwd ? true : false} type='submit' className='rounded-lg bg-orange py-4 px-2 w-full text-white font-semibold'>{`${isLoading ? 'Yuklanmoqda...' : "O'zgarishlarni saqlash"}`}</button>
				</form>
			</div>
		</div>
	)
}