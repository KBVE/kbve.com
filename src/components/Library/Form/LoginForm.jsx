import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '@lib/appwrite.ts';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
    let _response = '';
    try
      {
        await login(data.email, data.password)
      }
      catch (error)
      {
        _response = error;
      }
		console.log(_response);
	};

	/* const onSubmit = async (data) => {
    const fields = { fields: data };
    //login(fields?.email, fields?.password);
  };
  */

	return (
		<>
			<form
				className="max-w-xl m-auto py-10 mt-10 px-12 border"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label className="text-gray-600 font-medium">Email</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="email"
					{...register('email', { required: true })}
				/>
				{errors.email && <span>This field is required</span>}

				<label className="text-gray-600 font-medium block mt-4">Password</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					name="password"
					type="password"
					placeholder=""
					{...register('password', {
						required: "Please add a password",
					})}
				/>
				{errors.password && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.password.message}
          </div>
        )}
			
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
