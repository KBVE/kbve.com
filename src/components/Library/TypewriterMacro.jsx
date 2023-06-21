import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterMacro = (_message) => {
	return (
		<span>
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString(_message)
						.callFunction(() => {
							console.log('Typing String');
						})
						.start();
				}}
			/>
		</span>
	);
};

export default TypewriterMacro;
