import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CategoryServices } from '../../services';
import { CategoryItem } from './category-item';

export const CategoryList = () => {
	const state = useSelector(state => state.categories);

	return (
		<div className='container space-y-3'>
			{state?.categories ? state.categories.map(item => (
				<CategoryItem key={item.id} {...item} />
			)) : null}
		</div>
	)
}
