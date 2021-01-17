/** @format */

import React from 'react';

const AddUsers = () => {
	return (
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>ADD A USER</h2>
				<form>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
						/>
					</div>
					<button className='btn btn-primary'>Add Users</button>
				</form>
			</div>
		</div>
	);
};

export default AddUsers;
