//?			[Register]
//*			[IMPORT]
import React from 'react';
import { useForm } from 'react-hook-form';
import { create, OAuth2} from '@lib/appwrite.ts';
import * as Icons from '@mdi/js';
import { elementErrorMessage } from '@lib/tools';


//!			[RegisterForm *Needs JS Docs]
const RegisterForm = ({ data }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [loginError, setLoginError] = React.useState();
	const [dataObject, setDataObject] = React.useState(data);


	const onSubmit = async (data) => {
		try {
			await create(data.email, data.password, data.name);
			
		} catch (error) {
			setLoginError(error);
		}
	};
	React.useEffect(() => {}, [loginError]);

	return (
		<>
			{loginError && elementErrorMessage(loginError)}
			<form className="max-w-xl m-auto py-2" onSubmit={handleSubmit(onSubmit)}>
                <label className="font-medium block mt-4">Username: </label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="text"
					placeholder="username"
					{...register('name', { required: 'Please add your username!' })}
				/>
				{errors.email && elementErrorMessage(errors.email.message)}

				<label className="font-medium block mt-4">Email: </label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="email"
					placeholder="name@company.com"
					{...register('email', { required: 'Please add your email' })}
				/>
				{errors.email && elementErrorMessage(errors.email.message)}

				<label className="font-medium block mt-4">Password: </label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					name="password"
					type="password"
					placeholder="*****"
					{...register('password', {
						required: 'Please add a password',
					})}
				/>
				{errors.password && elementErrorMessage(errors.password.message)}

				<button
					className="mt-8 w-full bg-gradient-to-br from-indigo-500 via-fuchsia-400 to-orange-500 items-center rounded-xl shadow-2xl cursor-pointer  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out border py-3 px-6 font-semibold text-md"
					type="submit"
				>
					Register
				</button>
			</form>

			
		</>
	);
};

export default RegisterForm;
