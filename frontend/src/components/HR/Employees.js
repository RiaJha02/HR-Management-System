import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Education = () => {
	console.log('Yess');

	return (
		<Container>
			<p style={{ marginTop: '25px' }}>Employee Details</p>
			<Table responsive striped bordered hover size='sm'>
				<thead>
					<tr size='sm'>
						<th>#</th>
						<th>Name</th>
						<th>Role</th>
						<th>Department</th>
						<th>Salary</th>
						<th />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Ram Sharma</td>
						<td>SDE-1</td>
						<td>Development</td>
						<td>INR 750000/-</td>
						<td>
							<Link
								to='/emp/emp_id'
								className='btn btn-grey'
								size='sm'>
								View
							</Link>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>John Doe</td>
						<td>SDE-2</td>
						<td>Development</td>
						<td>INR 950000/-</td>
						<td>
							<Link to='/emp/emp_id' className='btn' size='sm'>
								View
							</Link>
						</td>
					</tr>
				</tbody>
			</Table>
			<Link
				to='/createEmpProfile'
				size='sm'
				className='btn btn-info my-2'>
				Add New
			</Link>
		</Container>
	);
};

export default Education;
