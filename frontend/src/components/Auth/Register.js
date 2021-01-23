import React, { useState } from 'react';
import {
	Container,
	Form,
	Button,
	Card,
	Row,
	Col,
} from 'react-bootstrap';
import '../Auth/auth.css';

const Register = () => {
	const [
		formData,
		setformData
	] = useState({
		name     : '',
		email    : '',
		password : '',
		role     : ''
	});

	const { name, email, password, role } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if(role !== 'HR-ID')
		{
			console.log('Give the HR Role ID');
		}else{
			console.log(formData);
		}
	}

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
						<p>
							Welcome, please provide the details!
						</p>
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
									name='role'
									value={role}
									onChange={(e) => onChange(e)}
									required
								/>
							</Form.Group>
							<Button size='sm' variant='warning' type='submit'>
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

export default Register;
