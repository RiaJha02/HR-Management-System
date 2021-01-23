import React from 'react'
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Footer from '../Layout/Footer.js';

const dashboard = () => {
    return (
        <Router>
			<Header />
            <main>
                <Card>
                    Hello HR DASHBOARD PAGE!!!!!!!!!!!!!!!!!
                </Card>
                <Route exact path='/hr' />
                <section className='container'>
                <Switch>
                    <Route exact path='/register' component={Profile} />
                    <Route exact path='/' component={Logout} />
                </Switch>
                </section>
            </main>
			<Footer />
		</Router>
    )
}

export default dashboard
