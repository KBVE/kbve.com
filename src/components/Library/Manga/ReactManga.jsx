import React, { useState, useEffect, useRef } from 'react';
import TypewriterMacro from '@lib/TypewriterMacro';
//import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Lottie from '@c/Element/Lottie/';


const MangaRender = (props) => {
    return (
        <>
        <main className="grow relative overflow-hidden flex flex-col h-screen m-0">
            {props.children}
        </main>
        </>
    )
}

const MangaSlide = (props) => {
    
}

const ReactManga = ({ data }) => {

    const myManga = useRef(null);
    const [mangaIndex, setManga] = useState(0);

   

	return (
		<>
			<article data-index="1" data-status="inactive">
				<div className="article-image-section article-section"> </div>
				<div className="article-description-section article-section">
					<p>
						A place where books hang out waiting to be grabbed. But don't be too
						grabby now, ya hear.
					</p>
				</div>
				<div className="article-title-section article-section">
					<h2>Wicked Cool Library Shelves</h2>
					<i className="fa-light fa-plus-large" />
				</div>
				<div className="article-nav-section article-section">
					<button
						className="article-nav-button"
						type="button"
						onClick={handleLeftClick()}
					>
						{/*<Lottie
							json="/assets/json/lottie/left.json"
							styler="flex-none h-16 lg:h-32"
    />*/}
                    Left
					</button>
					<button
						className="article-nav-button"
						type="button"
						onClick={handleRightClick()}
					>
						Right
					</button>
				</div>
			</article>
		</>
	);
};

export default ReactManga;
