import React from 'react';
import GlobalStyles from './styles/global';
import ApplicationRoutes from './routes';
import { AuthProvider } from './store/Auth';

const App = () => {
	return (
		<AuthProvider>
			<GlobalStyles />
			<ApplicationRoutes />
		</AuthProvider>
	);
};

export default App;
