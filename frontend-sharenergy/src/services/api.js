import Axios from 'axios';

export const Instance = Axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

Instance.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('@AUTH') || sessionStorage.getItem('@AUTH');

	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}

	return config;
});

export const GET = async (url, config) => await Instance.get(url, { ...config });

export const POST = async (url, data, config) => await Instance.post(url, data, { ...config });

export const PUT = async (url, data, config) => await Instance.put(url, data, { ...config });

export const PATCH = async (url, data, config) => await Instance.patch(url, data, { ...config });

export const DELETE = async (url, config) => await Instance.delete(url, { ...config });
