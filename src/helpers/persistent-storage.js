export const setToken = (key, data) => {
	try {
		localStorage.setItem(key, data);
	} catch (error) {
		throw error
	}
}

export const getToken = (key) => {
	try {
		return localStorage.getItem(key);
	} catch (error) {
		throw error
	}
}

export const removeToken = (key) => {
	try {
		return localStorage.removeItem(key);
	} catch (error) {
		throw error
	}
}