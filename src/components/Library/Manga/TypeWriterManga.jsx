import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriterMacro = ({message}) => {
	return (
		<span>
            {''}<Typewriter
                options = {{
                    wrapperClassName: 'min-h-[29px]'
                }}
				onInit={(typewriter) => {
					typewriter
                        .changeDelay(69)
						.typeString(message)
						.callFunction(() => {
							console.log('Typing String');
						})
						.start();
				}}
			/>
		</span>
	);
};

const TypeWriterManga = (props) => {
    const _message = props.children.props.value;
    console.log(props.children.props.value);
	return (
		<>
			<div className="">
				<TypeWriterMacro message={`${props.children.props.value}`} />
			</div>
		</>
	);
};

export default TypeWriterManga;
