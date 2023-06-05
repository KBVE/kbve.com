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
							//? Call Unity when Manga is typing?
						})
						.start();
				}}
			/>
		</span>
	);
};

export default TypewriterMacro;
