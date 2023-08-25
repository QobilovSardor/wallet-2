import axios from './api';

export const CategoryServices = {
	async getTransition(url) {
		const data = await axios.get(`/wallet/transaction${url}`);
		return data
	}
}