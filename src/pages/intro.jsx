import React from 'react';
import assets from '../assets'
import { Link } from 'react-router-dom';

export const Intro = () => (
	<div className='w-full h-screen bg-primary flex flex-col justify-center items-center text-white relative'>
		<div className='mb-20'>
			<div className='bg-white py-7 px-6 rounded-full inline-block'>
				<img src={assets.logo} alt="logo" className='m-0' />
			</div>
			<h3 className='text-4xl font-semibold capitalize mt-6'>wallet</h3>
		</div>

		<div className='absolute w-full bottom-0'>
			<img src={assets.bottomIcon} alt="bottom-icon" width='100%' />
		</div>
		<div className='absolute bottom-6 w-full text-center'>
			<Link to={'/register'} className='flex space-x-3 justify-center items-center mb-20'>
				<p className='text-xl'>Ro'yxatdan o'tish</p>
				<img src={assets.prevIcon} alt="prev-icon" width='25px' className='w-100 inline-block rotate-180' />
			</Link>
			<p className='text-sm'>Elektron hamyon uchun eng yaxshi tanlovingiz</p>
			<span className='text-sm'>Sardor Qobilov | Islom Karimov</span>
		</div>
	</div>
)
