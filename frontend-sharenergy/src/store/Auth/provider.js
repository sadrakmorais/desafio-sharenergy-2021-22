import React, { useState } from 'react';

import AuthContext from './context';

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const [admin, setAdmin] = useState(() => {
		const storedAdmin = localStorage.getItem('@USER') || sessionStorage.getItem('@USER');

		if (storedAdmin) {
			const storedToken = localStorage.getItem('@AUTH') || sessionStorage.getItem('@AUTH');
			const admin = JSON.parse(storedAdmin);

			setAuth(storedToken);

			return admin;
		}

		return null;
	});

	const signIn = (admin, token, persistLogged) => {
		const storage = persistLogged ? localStorage : sessionStorage;

		storage.setItem('@AUTH', token);
		storage.setItem('@USER', JSON.stringify(admin));

		setAdmin(admin);
		window.location.href = '/';
	};

	const signOut = () => {
		setAdmin(null);

		localStorage.clear();
		sessionStorage.clear();

		window.location.href = '/';
	};

	return (
		<AuthContext.Provider value={{ isLogged: !!admin, admin, signIn, signOut, auth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
