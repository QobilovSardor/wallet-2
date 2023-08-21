import axios from "axios";
import { getToken } from "../helpers/persistent-storage";

axios.defaults.baseURL = 'http://localhost:4000/api';

export default axios

axios.interceptors.request.use((config) => {
	const token = getToken('token');
	const authorization = token ? token : '';
	config.headers.Authorization = authorization;
	return config;
})