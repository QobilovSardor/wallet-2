import React from 'react';
import { Header } from '../layouts/header';
import { Footer } from '../layouts/footer';
import { CategoryList } from '../category/category-list';

export const Home = () => {
	return (
		<div className='flex flex-col justify-between h-screen relative'>
			<Header />

			<div className=''>
				<CategoryList />
			</div>

			<Footer />
		</div>
	)
}
