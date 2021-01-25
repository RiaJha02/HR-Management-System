import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ isAuthenticated, user }) => {
	if (isAuthenticated) {
		if (user.roleID === 'HR-ID') {
			return <Redirect to='/hr' />;
		} else {
			return <Redirect to='/emp' />;
		}
	}
	return (
		<Container>
			<Row>
				<Col />
				<Col md='auto'>
					<Card
						style={{
							width           : '30rem',
							height          : '22rem',
							marginTop       : '5em',
							backgroundColor : 'lightgrey',
							border          : '1px grey'
						}}>
						<Card.Body>
							<Card.Title>
								<h3>Welcome!</h3>
							</Card.Title>
							Human Resoureces Managament System is a form of
							human resources software that combines a number of
							systems and processes to ensure the easy management
							of human resources, business processes and data.
							<br />
							HackerEarth provides enterprise software that helps
							organisations with their technical hiring needs.
							HackerEarth is used by organizations for technical
							skill assessment and remote video interviewing. In
							addition to that HackerEarth also has a community
							and since inception built a base of 4M+ developers.
							<br />
							<br />
							<h6 style={{ color: 'red', fontWeight: '600' }}>
								For Register a new HR put role-id as HR-ID!
								<br />
								For Register a new employee create a one using
								HR dashboard!
							</h6>
						</Card.Body>
					</Card>
				</Col>
				<Col />
			</Row>
		</Container>
	);
};

Home.propTypes = {
	isAuthenticated : PropTypes.bool,
	user            : PropTypes.object
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated,
	user            : state.auth.user
});

export default connect(mapStateToProps)(Home);
