import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/hr'>HR-Management Application</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='/profle'>Profile</Nav.Link>
							<Nav.Link href='/'>Logout</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
