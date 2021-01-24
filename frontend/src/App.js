import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Layout/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import HRDashboard from './components/HR/dashboard';
import EMPDashboard from './components/Employee/dashboard';
import Page404 from './components/Page404';
import { Provider } from 'react-redux';
import Alert from './components/Layout/Alert';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Route exact path='/' component={Home} />
				<Alert />
				<section className='container'>
					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/hr' component={HRDashboard} />
						<Route exact path='/emp' component={EMPDashboard} />
						<Route component={Page404} />
					</Switch>
				</section>
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;
