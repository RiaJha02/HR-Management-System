import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: 'black' }}>
			<Container>
				<Row>
					<Col style={{ marginTop: '8px', marginBottom: '3px', color: 'white' }}>
						Company Copyright &copy; HRMS
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
