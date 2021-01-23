import React, { Component } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

export default class Login extends Component {
	render () {
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
							<p>
								Login to continue!
							</p>
							<Form className='form'>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										size='sm'
										type='email'
										placeholder='Enter email'
									/>
								</Form.Group>
								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										size='sm'
										type='password'
										placeholder='Enter Password'
									/>
								</Form.Group>
								<Button
									size='sm'
									variant='warning'
									type='submit'>
									Submit
								</Button>
							</Form>
						</Card>
					</Col>
					<Col />
				</Row>
			</Container>
		);
	}
}
