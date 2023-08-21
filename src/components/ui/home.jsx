import React from 'react';
import { Header } from '../layouts/header';
import { Footer } from '../layouts/footer';

export const Home = () => {
	return (
		<div className='flex flex-col justify-between h-screen relative'>
			<Header />
			<Footer />
		</div>
	)
}
