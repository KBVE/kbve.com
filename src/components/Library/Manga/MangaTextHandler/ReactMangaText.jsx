//!     [TO:DO Abstract Type Writer... I made too many of these god dam files.]
//?     [IMPORT]
import React from 'react';
import Typewriter from 'typewriter-effect';
import { user$ } from '@lib/appwrite';
import { useStore } from '@nanostores/react';

const DirtySpoon = ({ message, className }) => {
	return (
		<span>
			<Typewriter
				options={{
					wrapperClassName: {className},
				}}
				onInit={(typewriter) => {
					typewriter.changeDelay(69).typeString(message).start();
				}}
			/>
		</span>
	);
};


//*     [WRAPPER]
const ReactMangaText = ({ message, data, className }) => {

    return (
        <>
        <DirtySpoon message={message} className={className} />
        </>
    );

};

export default ReactMangaText;
