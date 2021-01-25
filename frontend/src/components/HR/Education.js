import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Education = () => {
	const [
		formData,
		setformData
	] = useState({
		school       : '',
		degree       : '',
		fieldofstudy : '',
		from         : '',
		to           : '',
		description  : ''
	});

	const { school, degree, fieldofstudy, from, to, description } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		const newEdu = {
			school,
			degree,
			fieldofstudy,
			from,
			to,
			description
		};
		try {
			const config = {
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			const body = JSON.stringify(newEdu);
			const res = await axios.post(
				'http://localhost:5000/api/profile/education',
				body,
				config
			);
			console.log(res.data);
		} catch (err) {
			console.log(err.response.data);
		}
	};

	return (
		<Container>
			<p>Education Details</p>
			<Form className='form' onSubmit={(e) => onSubmit(e)}>
				<Form.Group>
					<Form.Label>School</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter school name'
						name='school'
						value={school}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Degree</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter degree name'
						name='degree'
						value={degree}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Course</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter course name'
						name='fieldofstudy'
						value={fieldofstudy}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Start Date</Form.Label>
					<Form.Control
						size='sm'
						type='date'
						placeholder='Enter start date'
						name='from'
						value={from}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>End Date</Form.Label>
					<Form.Control
						size='sm'
						type='date'
						placeholder='Enter end date'
						name='to'
						value={to}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter description'
						name='description'
						value={description}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Link to='/hr' size='sm' className='btn btn-warning my-1'>
					Add
				</Link>
			</Form>
		</Container>
	);
};

export default Education;
