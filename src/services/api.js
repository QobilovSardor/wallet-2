import axios from "axios";
import { getToken } from "../helpers/persistent-storage";

// axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.baseURL = 'http://65.2.129.94:4000/api';

export default axios

axios.interceptors.request.use((config) => {
	const token = getToken('token');
	const authorization = token ? token : '';
	config.headers.Authorization = authorization;
	return config;
})