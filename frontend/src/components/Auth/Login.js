import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import './auth.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuthenticated, userID }) => {
	const [
		formData,
		setformData
	] = useState({
		email    : '',
		password : ''
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		login({ email, password });
	};

	//Redirect if logged in
	if (isAuthenticated) {
		if(userID === 'HR-ID')
			return <Redirect to='/hr' />; //If HR is logged in
		else
			return <Redirect to='/emp' />; //If Employee is logged in
	}

	return (
		<Container>
			<Row>
				<Col />
				<Col md='auto'>
					<Card
						style={{
							width           : '30rem',
							marginTop       : '5em',
							backgroundColor : 'lightgrey',
							border          : '1px grey'
						}}>
						<p>Login to continue!</p>
						<Form className='form' onSubmit={(e) => onSubmit(e)}>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									size='sm'
									type='email'
									placeholder='Enter email'
									name='email'
									value={email}
									onChange={(e) => onChange(e)}
									required
								/>
							</Form.Group>
							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									size='sm'
									type='password'
									placeholder='Enter Password'
									name='password'
									value={password}
									onChange={(e) => onChange(e)}
									minLength='6'
									required
								/>
							</Form.Group>
							<Button
								size='sm'
								variant='warning'
								type='submit'
								value='login'>
								Submit
							</Button>
						</Form>
					</Card>
				</Col>
				<Col />
			</Row>
		</Container>
	);
};

Login.propTypes = {
	login           : PropTypes.func.isRequired,
	isAuthenticated : PropTypes.bool,
	userID            : PropTypes.element
};

const mapStateToprops = (state) => ({
	isAuthenticated : state.auth.isAuthenticated,
	user            : state.auth.user
});

export default connect(mapStateToprops, { login })(Login);
