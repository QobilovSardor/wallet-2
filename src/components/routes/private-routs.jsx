import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getToken } from '../../helpers/persistent-storage';

export const PrivatePouts = () => {
	return getToken('token') ? <Outlet /> : <Navigate to='/' />
}
