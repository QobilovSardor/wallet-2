import React from 'react'
import assets from '../../assets'
import { Link } from 'react-router-dom';

export const Footer = () => {

	return (
		<div className='flex items-end space-x-10 justify-center pb-4 mt-5'>
			<Link to='/home' className='text-center'>
				<img src={assets.home} alt="" className='inline' />
				<p className='text-sm font-medium'>Home</p>
			</Link>
			<div className='text-center'>
				<div className='bg-violet-700 rounded-lg p-2 inline-block'>
					<img src={assets.plus} alt="top arrow" width='27px' height='27px' />
				</div>
				<p className='text-sm'>Qo'shish</p>
			</div>
			<Link to='/profile' className={`text-center`}>
				<img src={assets.user} alt="" className='inline' />
				<p className='text-sm font-medium'>Profil</p>
			</Link>
		</div>
	)
}
