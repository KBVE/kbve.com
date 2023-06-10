import React from 'react';
import { useForm } from 'react-hook-form';
import { login, github, discord, google, twitch } from '@lib/appwrite.ts';
import * as Icons from '@mdi/js';

const LoginForm = ({ data }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [loginError, setLoginError] = React.useState();

	const onSubmit = async (data) => {
		try {
			await login(data.email, data.password);
		} catch (error) {
			setLoginError(error);
		}
	};
	React.useEffect(() => {}, [loginError]);

	const ErrorMessage = (__message) => {
		return (
			<>
				<div role="alert space-y-4 p-4">
					<div class="bg-red-500 font-bold rounded-t px-4 py-2">Warning!</div>
					<div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
						<p>{__message}</p>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			{loginError && ErrorMessage(loginError)}
			<form className="max-w-xl m-auto py-2" onSubmit={handleSubmit(onSubmit)}>
				<label className="font-medium block mt-4">Email Address: </label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="email"
					placeholder="name@company.com"
					{...register('email', { required: 'Please add your email' })}
				/>
				{errors.email && ErrorMessage(errors.email.message)}

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
				{errors.password && ErrorMessage(errors.password.message)}

				<button
					className="mt-8 w-full bg-gradient-to-br from-indigo-500 via-fuchsia-400 to-orange-500 items-center rounded-xl shadow-2xl cursor-pointer  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out border py-3 px-6 font-semibold text-md"
					type="submit"
				>
					Login
				</button>
			</form>

			<div className="flex flex-col items-center">
				<div className="flex-initial w-64 md:w-full h-fit">
					<button
						aria-label="Log in with GitHub"
						className="w-full hover:scale-x-110 hover:scale-y-105 transition duration-300 rounded-full p-8 m-4 bg-[#171515] hover:bg-[#171515]/60 focus:ring-4 focus:outline-none focus:ring-[#171515]/50 font-medium text-xs px-2.5 py-2.5 text-center inline-flex items-center  justify-center  dark:focus:ring-[#171515]/55 mr-2 mb-2"
						type="button"
						onClick={github}
					>
						{' '}
						Sign in with Github
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current ml-2"
						>
							<title>Sign in with Github</title>
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
						</svg>
					</button>
				</div>
				<div className="flex-initial w-64 md:w-full h-fit">
					<button
						aria-label="Log in with Discord"
						className="w-full hover:scale-x-110 hover:scale-y-105 transition duration-300 rounded-full p-8 m-4 bg-[#7289da] hover:bg-[#7289da]/90 focus:ring-4 focus:outline-none focus:ring-[#171515]/50 font-medium text-xs px-2.5 py-2.5 text-center inline-flex items-center  justify-center  dark:focus:ring-[#171515]/55 mr-2 mb-2"
						type="button"
						onClick={discord}
					>
						{' '}
						Sign in with Discord
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-5 h-5 fill-current ml-1"
						>
							<title> Sign in with Discord </title>{' '}
							<g>
								{' '}
								<path fill="none" d="M0 0h24v24H0z" />{' '}
								<path d="M13.914 14.58a8.998 8.998 0 0 1-.484.104 7.06 7.06 0 0 1-2.664-.01c-.154-.03-.372-.083-.653-.158l-.921 1.197c-2.273-.073-3.137-1.596-3.137-1.596 0-3.381 1.481-6.122 1.481-6.122 1.481-1.133 2.89-1.102 2.89-1.102l.403.525a1.12 1.12 0 0 1 .112-.01 8.527 8.527 0 0 1 2.314.01l.442-.525s1.41-.031 2.89 1.103c0 0 1.482 2.74 1.482 6.121 0 0-.875 1.522-3.148 1.596l-1.007-1.134zM10.076 11C9.475 11 9 11.45 9 12s.485 1 1.076 1c.6 0 1.075-.45 1.075-1 .01-.55-.474-1-1.075-1zm3.848 0c-.6 0-1.075.45-1.075 1s.485 1 1.075 1c.601 0 1.076-.45 1.076-1s-.475-1-1.076-1zM21 23l-4.99-5H19V4H5v14h11.003l.57 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v19z" />{' '}
							</g>{' '}
						</svg>
					</button>
				</div>
				<div className="flex-initial w-64 md:w-full h-fit">
					<button
						aria-label="Log in with Google"
						className="w-full hover:scale-x-110 hover:scale-y-105 transition duration-300 rounded-full p-8 m-4 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-xs px-2.5 py-2.5 text-center inline-flex items-center  justify-center  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
						type="button"
						onClick={google}
					>
						{' '}
						Sign in with Google
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-5 h-5 fill-current ml-1"
						>
							<title>Sign in with Google</title>
							<path
								fill="currentColor"
								d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
							/>
						</svg>
					</button>
				</div>
				<div className="flex-initial w-64 md:w-full h-fit">
					<button
						aria-label="Log in with Twitch"
						className=" w-full hover:scale-x-110 hover:scale-y-105 transition duration-300 rounded-full p-8 m-4 bg-[#6441a5] hover:bg-[#6441a5]/90 focus:ring-4 focus:outline-none focus:ring-[#6441a5]/50 font-medium text-xs px-2.5 py-2.5 text-center inline-flex items-center  justify-center  dark:focus:ring-[#6441a5]/55 mr-2 mb-2"
						type="button"
						onClick={twitch}
					>
						{' '}
						Sign in with Twitch
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-5 h-5 fill-current ml-1"
						>
							<title>Sign in with Twitch</title>
							<path
								fill="currentColor"
								d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
