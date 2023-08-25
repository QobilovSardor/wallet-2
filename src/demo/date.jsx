import React, { useId, useState } from 'react';

export const Demo = () => {
	const [user, setUser] = useState({
		1: { name: 'John', age: 12 },
		2: { name: 'John2', age: 12 },
		3: { name: 'John3', age: 12 },
		4: { name: 'John4', age: 12 },
	});

	const handleAgeChange = (userId, newAge) => {
		setUser(prevUser => ({
			...prevUser,
			[userId]: { ...prevUser[userId], age: newAge }
		}));
	};

	return (
		<div>
			{Object.keys(user).map((item, idx) => (
				<div key={idx}>
					<span>{user[item].name}</span>
					<input
						type="number"
						value={user[item].age}
						onInput={e => handleAgeChange(item, e.target.value)}
						className='border mx-3'
					/>
				</div>
			))}
		</div>
	);
};