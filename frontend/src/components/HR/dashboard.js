import React, { Fragment, useEffect } from 'react';
import {
	Col,
	Container,
	Row,
	Card,
	Table,
	ListGroup,
	Image,
	Spinner
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import './hr.css';

const Dashboard = ({
	getCurrentProfile,
	auth              : { user },
	profile           : { profile, loading }
}) => {
	useEffect(
		() => {
			getCurrentProfile();
		},
		[
			getCurrentProfile
		]
	);
	return loading && profile == null ? (
	<Fragment>
		<Spinner type="grow" color="primary" />
	</Fragment>) : ( <Fragment>
		{ profile == null ? (
		<Fragment>
				<p>You have not set up the profile yet!!</p>
				<Link to='/createProfile' size='sm' className='btn btn-info my-1'>
					Create Profile
				</Link>
		</Fragment> ) : ( <Container>
			<Row>
			</Row>
			<Row>
				<Col>
					<Card style={{ marginTop: '1em' }}>
						<Card.Title style={{margin:'15px 15px 0px 15px'}}>Personal Details</Card.Title>
						<Card.Body>
							<ListGroup>
								Name : {user && user.name}
								<br />
								Email : {user && user.email}
								<br />
								Company : {profile && profile.company}
								<br />
								Location : {profile && profile.location}
								<br />
								Designation : {profile && profile.designation}
								<br />
								Skills
								<br />
								Bio : {profile && profile.bio}
								<br />
							</ListGroup>
						</Card.Body>
					</Card>
					<Card>
					<Card.Title style={{margin:'15px 15px 0px 15px'}}>Social Media Handles</Card.Title>
						<Card.Body>
						<ListGroup>
								Twitter : {profile && profile.social.twitter}
								<br />
								LinkedIn : {profile && profile.social.linkedin}
								<br />
								Facebook : {profile && profile.social.facebook}
								<br />
								Instagram : {profile && profile.social.instagram}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col>
				<Card style={{ marginTop: '3em'}}>
				<Image
					src={user && user.avatar}
					style={{margin:'0.1em 0.1em 0.1em 0.1em' }}
					fluid   
				/>
				</Card>
				</Col>
			</Row>
			<Row>
				<Col style={{ margin: '10px 10px 10px 10px' }}>
					<h4>Education</h4>
					<Table responsive striped bordered hover size='sm'>
						<thead>
							<tr>
								<th>#</th>
								<th>School</th>
								<th>Degree</th>
								<th>Course</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr />
						</tbody>
					</Table>
					<Link to='/education' size='sm' className='btn btn-info my-1'>Add Education</Link>
				</Col>
			</Row>
			<Row>
				<Col style={{ margin: '10px 10px 10px 10px' }}>
					<h4>Experience</h4>
					<Table responsive striped bordered hover size='sm'>
						<thead>
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>Company</th>
								<th>Location</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr />
						</tbody>
					</Table>
					<Link to='/education' size='sm' className='btn btn-info my-1'>Add Experience</Link>
				</Col>
			</Row>
	</Container>
	)}
	</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile : PropTypes.func.isRequired,
	auth              : PropTypes.object.isRequired,
	profile           : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth    : state.auth,
	profile : state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
