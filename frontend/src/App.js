import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import HRDashboard from './components/HR/Dashboard';
import EMPDashboard from './components/Employee/Dashboard';
import Education from './components/HR/Education';
import Experience from './components/HR/Experience';
import Employees from './components/HR/Employees';
import { Provider } from 'react-redux';
import Alert from './components/Layout/Alert';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import PrivateRoute from './components/routing/PrivateRoute';
import Leave from './components/Employee/Leave';
import Pay from './components/Employee/Pay';
import Docs from './components/Employee/Docs';
import CreateProfile from './components/HR/CreateProfile';

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
						<PrivateRoute exact path='/hr' component={HRDashboard} />
						<PrivateRoute exact path='/createProfile' component={CreateProfile} />
						<PrivateRoute exact path='/education' component={Education} />
						<PrivateRoute exact path='/experience' component={Experience} />
						<PrivateRoute exact path='/employees' component={Employees} />
						<PrivateRoute exact path='/emp' component={EMPDashboard} />
						<PrivateRoute exact path='/leave' component={Leave} />
						<PrivateRoute exact path='/pay' component={Pay} />
						<PrivateRoute exact path='/docs' component={Docs} />
					</Switch>
				</section>
			</Router>
		</Provider>
	);
};

export default App;
