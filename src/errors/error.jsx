import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import assets from '../assets';


export const Error = () => {
	const {error} = useSelector(state => state.auth);
	const errors = typeof error === 'string' ? [error] : error

	return (
		<>
			{errors ? errors.map((msg, index) => (
				<div className='space-y-2 mb-2' key={index}>
					<div className='bg-warning p-3 flex items-center space-x-3 text-sm rounded-lg capitalize'>
						<img src={assets.warning} alt="warning icon" />
						<p className='text-white '>{msg}</p>
					</div>
				</div>
			)) : null}
		</>
	)
}
