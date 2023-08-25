import React, { useEffect, useState } from 'react'
import assets from '../../assets';

export const CategoryItem = (props) => {
	const { title, createdAt } = props;
	const [time, setTime] = useState();
	// console.log(createdAt);
	useEffect(() => {
		const date = new Date(createdAt);
		const DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		const MM = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
		const YY = date.getFullYear();
		console.log('salom', DD, MM, YY);
		setTime(YY + '-' + MM + '-' + DD)
	}, [])
console.log('time', time);
	return (
		<div className='bg-white flex items-center justify-between border-gray-200 border rounded-lg p-3'>
			<div className='flex items-center space-x-2'>
				<img src={assets.trash} alt="chart icon" width='30px' height='30px' />
				<h3>Kirim: {title}</h3>
			</div>
			<div className='text-end'>
				{/* <h3 className='text-green-400'>{amount}:UZS</h3> */}
				<span className='text-sm block'>{time}</span>
			</div>
		</div>
	)
}
