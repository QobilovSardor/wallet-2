import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5432/api';

export default axios

axios.interceptors.request.use((config) => {
	const token = getToken('token');
	const authorization = token ? token : '';
	config.headers.Authorization = authorization
	return config
})