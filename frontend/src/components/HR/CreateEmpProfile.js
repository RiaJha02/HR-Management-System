import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CreateEmpProfile = () => {
	const [
		formData,
		setformData
	] = useState({
		name     : '',
		email    : '',
		contact  : '',
		location : '',
		role     : '',
		dept     : '',
		salary   : ''
	});

	const { name, email, contact, location, role, dept, salary } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('Success');
	};

	return (
		<Container>
            <p>Add New Employee</p>
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
				<Form.Group>
					<Form.Label>Contact</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter mobile number'
						name='contact'
						value={contact}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Location</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter location'
						name='location'
						value={location}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Role</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter role-id'
						name='role'
						value={role}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Department</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter department'
						name='dept'
						value={dept}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Salary</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter salary in INR'
						name='salary'
						value={salary}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
                <Button variant='success'>Create</Button>{' '}
				<Link to='/hr' size='sm' className='btn btn-danger size-sm'>
					Back
				</Link>
			</Form>
		</Container>
	);
};

export default CreateEmpProfile;
