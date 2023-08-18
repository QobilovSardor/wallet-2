import React from 'react';

export const Input = (props) => {
	const {
		type,
		name,
		placeholder,
		state,
		setState
	} = props;
	return (
		<input
			type={type}
			name={name}
			value={state}
			onChange={(e) => setState(e.target.value)}
			placeholder={placeholder}
			className="border rounded-lg border-gray-300  px-3 w-full h-14"
		/>
	)
}