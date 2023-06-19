import React from 'react';
import { useForm } from 'react-hook-form';
import {elementErrorMessage, clean} from '@lib/tools.jsx';

const ReactPostBoy = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [posterBoyData, setPosterBoyData] = React.useState();
    const [functionId, setFunctionID] = React.useState();
	const [posterBoyError, setPosterBoyError] = React.useState('');

	const onSubmit = async (data) => {
		try {
            await setPosterBoyData(clean(data.name));
		} catch (error) {
			setPosterBoyError(error);
		}
	}

    React.useEffect(() => {
		
		if(posterBoyData)
        {
            console.log(posterBoyData)
        }
	}, [posterBoyData]);

	return (
		<>
			<form className="max-w-xl m-auto py-2" onSubmit={handleSubmit(onSubmit)}>
				<label className="font-medium block mt-4 gradient-text">
					API Location:{' '}
				</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="url"
					placeholder="http://localhost:5000/"
					{...register('api', {
						value: 'http://localhost:5000/',
						required: 'Enter your API Location!',
					})}
				/>
				{errors.api && elementErrorMessage(errors.api.message)}

				<label className="font-medium block mt-4 gradient-text">
					Data:{' '}
				</label>
				<input
					className="border-solid text-gray-700 border-gray-300 border py-2 px-4 w-full rounded"
					type="text"
					placeholder="What is your JSON Data?"
					{...register('name', { required: 'Please what is your name!' })}
				/>
				{errors.name && elementErrorMessage(errors.name.message)}
				<button
					className="mt-8 w-full bg-gradient-to-br from-indigo-500 via-fuchsia-400 to-orange-500 items-center rounded-xl shadow-2xl cursor-pointer  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out border py-3 px-6 font-semibold text-md"
					type="submit"
				>
					Process
				</button>
			</form>
		</>
	);
};

export default ReactPostBoy;
