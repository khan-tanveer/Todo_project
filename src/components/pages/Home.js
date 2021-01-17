/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:3002/users');
		// console.log(result);
		setUsers(result.data);
	};

	return (
		<div className='container'>
			<div className='py-4'>
				<h1>Home Page</h1>
				<table class='table border shadow'>
					<thead class='table-dark'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>User Name</th>
							<th scope='col'>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr>
								<th scope='row'>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>
									<Link class='btn btn-primary mr-2'>View</Link>
									<Link class='btn btn-outline-primary mr-2'>Edit</Link>
									<Link class='btn btn-danger mr-2'>Delete</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;