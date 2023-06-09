import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '@lib/appwrite.ts';

const LoginForm = ({ data }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		let _response = '';
		try {
			await login(data.email, data.password);
		} catch (error) {
			_response = error;
		}
		console.log(_response);
	};

	const ErrorMessage = (__message) => {
		return (
			<>
				<div role="alert space-y-4 p-4">
					<div class="bg-red-500 font-bold rounded-t px-4 py-2">
						Warning!
					</div>
					<div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
						<p>{__message}</p>
					</div>
					</div>
			</>
		);
	};

	return (
		<>
			<form
				className="max-w-xl m-auto py-10 mt-10 px-12 border"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label className="font-medium block mt-4">Email</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="email"
					{...register('email', { required: 'Please add your email' })}
				/>
				{errors.email && ErrorMessage(errors.email.message)}

				<label className="font-medium block mt-4">Password</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					name="password"
					type="password"
					placeholder=""
					{...register('password', {
						required: 'Please add a password',
					})}
				/>
				{errors.password && ErrorMessage(errors.password.message)}

				<button
					className="mt-4 w-full bg-gradient-to-br from-indigo-500 via-fuchsia-400 to-orange-500 items-center rounded-xl shadow-2xl cursor-pointer  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out border py-3 px-6 font-semibold text-md"
					type="submit"
				>
					Login
				</button>
			</form>
		</>
	);
};

export default LoginForm;
