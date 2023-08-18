import React from 'react'

export const authenticate = (userData, isRegistering) => (dispatch) => {
	
	dispatch(setUser(userData));
};
