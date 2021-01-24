import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './auth.css';

const Register = ({ setAlert, register }) => {
	const [
		formData,
		setformData
	] = useState({
		name     : '',
		email    : '',
		password : '',
		roleID   : ''
	});

	const { name, email, password, roleID } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (roleID !== 'HR-ID') {
			setAlert('Please provide ID for HR Role', 'danger');
		} else {
			register({ name, email, password, roleID });
		}
	};

	return (
		<Container fluid='md'>
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
						<p>Welcome, please provide the details!</p>
						<Form className='form' onSubmit={(e) => onSubmit(e)}>
							<Form.Group>
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									size='sm'
									type='text'
									placeholder='Enter name'
									name='name'
									value={name}
									onChange={(e) => onChange(e)}
									required
								/>
							</Form.Group>
							<Row>
								<Col>
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
								</Col>
								<Col>
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
								</Col>
							</Row>
							<Form.Group>
								<Form.Label>Role-ID</Form.Label>
								<Form.Control
									size='sm'
									type='text'
									placeholder='Enter ID provided'
									name='roleID'
									value={roleID}
									onChange={(e) => onChange(e)}
									required
								/>
							</Form.Group>
							<Button
								size='sm'
								variant='warning'
								type='submit'
								value='register'>
								Register
							</Button>
						</Form>
					</Card>
				</Col>
				<Col />
			</Row>
		</Container>
	);
};

Register.propTypes = {
	setAlert : PropTypes.func.isRequired,
	register : PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Register);
