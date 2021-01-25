import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Container, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
	const [
		formData,
		setformData
	] = useState({
		company     : '',
		location    : '',
		designation : '',
		skills      : '',
		bio         : '',
		twitter     : '',
		facebook    : '',
		linkedin    : '',
		instagram   : ''
	});

	const {
		company,
		location,
		designation,
		skills,
		bio,
		twitter,
		facebook,
		linkedin,
		instagram
	} = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		createProfile(formData, history);
	};

	return (
		<Container>
			<p>Enter your details</p>
			<Form className='form' onSubmit={(e) => onSubmit(e)}>
				<Form.Group>
					<Form.Label>Company</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Company Name'
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
						placeholder='Enter city and country (Example: Delhi, India)'
						name='location'
						value={location}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Designation</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Designation'
						name='designation'
						value={designation}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Skills</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter skills like C++, Java'
						name='skills'
						value={skills}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Bio</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						placeholder='Enter description'
						name='bio'
						value={bio}
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Twitter</Form.Label>
					<Form.Control
						size='sm'
						type='link'
						placeholder='Enter twitter handle'
						name='twitter'
						value={twitter}
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Facebook</Form.Label>
					<Form.Control
						size='sm'
						type='link'
						placeholder='Enter facebook handle'
						name='facebook'
						value={facebook}
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>LinkedIn</Form.Label>
					<Form.Control
						size='sm'
						type='link'
						placeholder='Enter linkedin handle'
						name='linkedin'
						value={linkedin}
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Instagram</Form.Label>
					<Form.Control
						size='sm'
						type='link'
						placeholder='Enter instagram handle'
						name='instagram'
						value={instagram}
						onChange={(e) => onChange(e)}
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

CreateProfile.propTypes = {
	createProfile : PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
