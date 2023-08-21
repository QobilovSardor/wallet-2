import axios from './api';

export const AuthServices = {
	async authPost(url, user) {
		const data = await axios.post(`/auth/${url}`, { ...user })
		return data
	},
	async getProfile() {
		const data = await axios.get(`/auth/profile`)
		return data
	}
}