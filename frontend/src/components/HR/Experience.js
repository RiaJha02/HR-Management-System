import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Experience = () => {
	const [
		formData,
		setformData
	] = useState({
		title       : '',
		company       : '',
		location : '',
		from         : '',
		to           : '',
		description  : ''
	});

	const { title, company, location, from, to, description } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		const newEdu = {
			title, company, location, from, to, description
		};
		try {
			const config = {
				headers : {
					'Content-Type' : 'application/json'
				}
			}
			const body = JSON.stringify(newEdu);
			const res = await axios.post('http://localhost:5000/api/profile/experience', body, config);
            console.log(res.data);
		} catch (err) {
			console.log(err.response.data);
		}
	};

	return (
		<Container>
			<p>Experience Details</p>
			<Form className='form' onSubmit={(e) => onSubmit(e)}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter title'
						name='title'
						value={title}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Company</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter company'
						name='company'
						value={company}
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
				<Link to='/hr' size='sm' className='btn btn-warning my-1'>Add</Link>
			</Form>
		</Container>
	);
};

export default Experience;
