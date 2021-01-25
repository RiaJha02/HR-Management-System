import React, { useEffect } from 'react';
import {
	Button,
	Col,
	Container,
	Row,
	Card,
	Table,
	ListGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import './hr.css';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);
	return (
		<Container>
			<Row>
				<Card.Title style={{ margin: '12px 12px 2px 12px' }}>
					HR Personal Details
				</Card.Title>
			</Row>
			<Row>
				<Col>
					<Card style={{ marginTop: '1em' }}>
						<Card.Body>
							<ListGroup>
								Name
								<br />
								Email
								<br />
								Contact
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>{/* <Card.Img>IMAGE</Card.Img> */}</Card>
				</Col>
			</Row>
			<Row>
				<Col style={{ margin: '10px 10px 10px 10px' }}>
					<h4>Education</h4>
					<Table striped bordered hover size='sm'>
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
					<Button size='sm' variant='info'>
						<Link to='/education'>Add Education</Link>
					</Button>
				</Col>
			</Row>
			<Row>
				<Col style={{ margin: '10px 10px 10px 10px' }}>
					<h4>Experience</h4>
					<Table striped bordered hover size='sm'>
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
					<i className='fab fa-black-tie text-primary' />
					<Button size='sm' variant='info'>
						<Link to='/experience'>Add Experience</Link>
					</Button>
				</Col>
			</Row>
		</Container>
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
