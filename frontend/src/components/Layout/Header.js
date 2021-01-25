import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	const authLinks1 = (
		<Nav className='ml-auto'>
			<Nav.Link href='/hr'>
				<span className='hide-sm'>Profile</span>
			</Nav.Link>
			<Nav.Link href='/employees'>
				<span className='hide-sm'>Employees</span>
			</Nav.Link>
			<Nav.Link onClick={logout} href='/hr'>
				<span className='hide-sm'>Logout</span>
			</Nav.Link>
		</Nav>
	);
	const authLinks2 = (
		<Nav className='ml-auto'>
			<Nav.Link href='/emp'>
				<span className='hide-sm'>Profile</span>
			</Nav.Link>
			<Nav.Link href='/leave'>
				<span className='hide-sm'>Leaves</span>
			</Nav.Link>
			<Nav.Link href='/pay'>
				<span className='hide-sm'>Payroll</span>
			</Nav.Link>
			<Nav.Link href='/docs'>
				<span className='hide-sm'>Docs</span>
			</Nav.Link>
			<Nav.Link onClick={logout} href='/hr'>
				<span className='hide-sm'>Logout</span>
			</Nav.Link>
		</Nav>
	);
	const guestLinks = (
		<Nav className='ml-auto'>
			<Nav.Link href='/register'>Register</Nav.Link>
			<Nav.Link href='/login'>Login</Nav.Link>
		</Nav>
	);
	return (
		<header>
			<Navbar bg='warning' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						HR-Management Application
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					{!loading && (
						<Navbar.Collapse id='basic-navbar-nav'>
							{
								isAuthenticated ? user.roleID ===
								'HR-ID' ? authLinks1 :
								authLinks2 :
								guestLinks}
						</Navbar.Collapse>
					)}
				</Container>
			</Navbar>
		</header>
	);
};

Header.propTypes = {
	logout : PropTypes.func.isRequired.apply,
	auth   : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth : state.auth
});

export default connect(mapStateToProps, { logout })(Header);
