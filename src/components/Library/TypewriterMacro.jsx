import React, { useState, Component } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterMacro = (_message) => {
    	return createElement(
			<span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(this.state.message)
							.callFunction(() => {
								console.log('Typing String');
								//? Call Unity when Manga is typing?
							})
							.start();
					}}
				/>
			</span>
		)
}

export default TypewriterMacro;
