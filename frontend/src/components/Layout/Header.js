import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>HR-Management Application</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='/register'>Register</Nav.Link>
							<Nav.Link href='/login'>Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
