import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/home';
import Clientes from '../pages/clientes';
import Financeiro from '../pages/financeiro';
import AddClientes from '../pages/addCliente';
import AddAdmins from '../pages/addAdmin';

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/home' />
				</Route>
				<Route exact path='/home'>
					<Layout>
						<Home />
					</Layout>
				</Route>
				<Route exact path='/clientes'>
					<Layout>
						<Clientes />
					</Layout>
				</Route>
				<Route exact path='/addclientes'>
					<Layout>
						<AddClientes />
					</Layout>
				</Route>
				<Route exact path='/financeiro'>
					<Layout>
						<Financeiro />
					</Layout>
				</Route>
				<Route exact path='/addadmin'>
					<Layout>
						<AddAdmins />
					</Layout>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
