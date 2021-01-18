/** @format */

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
	let history = useHistory();
	const { id } = useParams();
	// alert(id);
	const [user, setUsers] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		website: '',
	});

	const { name, username, email, phone, website } = user;

	const onInputChange = (e) => {
		console.log(e.target.value);
		setUsers({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:3002/users/${id}`, user);
		history.push('/');
	};

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const result = await axios.get(`http://localhost:3002/users/${id}`);
		setUsers(result.data);
	};

	return (
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Edit A USER</h2>
				<form onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
							value={name}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your username'
							name='username'
							value={username}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your E-mail Address'
							name='email'
							value={email}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Phone number'
							name='phone'
							value={phone}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Website Name'
							name='website'
							value={website}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<button className='btn btn-warning btn-block'>Update Users</button>
				</form>
			</div>
		</div>
	);
};

export default EditUser;
