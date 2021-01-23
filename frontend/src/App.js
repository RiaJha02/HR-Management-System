import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Layout/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import '../src/App.css';

const App = () => {
	return (
		<Router>
			<Header />
      <main>
        <Route exact path='/' component={Home} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </main>
			<Footer />
		</Router>
	);
};

export default App;