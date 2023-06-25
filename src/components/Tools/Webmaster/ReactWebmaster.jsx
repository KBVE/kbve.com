//?     Webmaster Tools to make it easier to manage your website(s).

import React from 'react';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';
import { WebTools } from './WebTools.jsx';

//* [START] -> Domain Functions Below by Kory Becker
function getHostName(url) {
	const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
	if (
		match != null &&
		match.length > 2 &&
		typeof match[2] === 'string' &&
		match[2].length > 0
	) {
		return match[2];
	} else {
		return null;
	}
}
function getDomain(url) {
	const hostName = getHostName(url);
	let domain = hostName;

	if (hostName != null) {
		const parts = hostName.split('.').reverse();

		if (parts != null && parts.length > 1) {
			domain = `${parts[1]}.${parts[0]}`;

			if (hostName.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
				domain = `${parts[2]}.${domain}`;
			}
		}
	}

	return domain;
}
//* [END] -> Domain Functions
///
///
//! [START] -> ReactWebmaster
const ReactWebmaster = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [domain, setDomain] = React.useState(null);
	const [webmasterError, setWebmasterError] = React.useState('');

	const onSubmit = async (data) => {
		try {
			const _url = getDomain(data.domain);
			const clean = DOMPurify.sanitize(_url, {
				USE_PROFILES: { html: false, mathMl: false, svg: false },
			});
			setDomain(clean);
		} catch (error) {
			setWebmasterError(error);
		}
	};

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

	const ProcessMessage = () => {
		console.log('Processing Domain');
		return (
			<>
			
					{WebTools(domain)}			</>
		);
	};

	return (
		<>
			{domain && ProcessMessage()}				
			<form className="max-w-xl m-auto py-2" onSubmit={handleSubmit(onSubmit)}>
				
				{webmasterError && ErrorMessage(webmasterError)}
				<label className="font-medium block mt-4 gradient-text">
					Domain Address:{' '}
				</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="url"
					placeholder="https://kbve.com/"
					{...register('domain', { required: 'Please add your domain!' })}
				/>
				{errors.domain && ErrorMessage(errors.domain.message)}
				<button
					className="mt-8 w-full bg-gradient-to-br from-indigo-500 via-fuchsia-400 to-orange-500 items-center rounded-xl shadow-2xl cursor-pointer  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out border py-3 px-6 font-semibold text-md"
					type="submit"
				>
					Check Domain
				</button>
			</form>
		</>
	);
};

//! [END] -> ReactWebmaster
export default ReactWebmaster;
