//*     [ReactArticle]          ->      [MambaArticle]
//*     This JSX Component will render the generic articles, it should be called via <MambaArticle.astro>
//*     {Astro} ->  [JSX] -> [React] -> [ReactArticle]  -> [MambaArticle]
//?     Reference - https://kbve.com/application/javascript#react

//*     {React}
import React, { Fragment, useState, useEffect, useCallback, useRef  } from "react";


//*     Function MambaArticle()
export default function MambaArticle({ article }) {
    
    const [isRender, setRender] = useState(true);
    const isMounted = useRef(true);
    const canvas = useRef(null);

  // {isMounted} is set to false when we unmount the component.
  useEffect(() => {
      return () => {
        isMounted.current = false
      }
    }, [])

  // Call

  
  const sendRequest = useCallback(async () => {
    if (isRender) { return }
    setRender(true)
    await API.sendRequest()
    if (isMounted.current){   setRender(false)  }
  }, [isRender]) 


  if(isPlay === false)
  {
    return  (<> 
      <button type="button" className={buttonClassName} disabled={isPlay} onClick={sendRequest}>Play Now
        <span className="absolute top-0 right-0 px-5 py-1 text-xs gradient-text tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-orange-400">New</span>
      </button> 
    </>);
  }
  else {

  return (
    //<div className="container place-content-center justify-center items-center py-12">
    <div>

      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        // style={{ width: 1280, height: 720, }}
        <div className="loading-overlay">
      <p>Zane's Rage is Loading... ({loadingPercentage}%)</p>

        </div>
      )}
       <Fragment>

      <div id="unity-container" className="">
      <Unity ref={canvas} className="" matchWebGLToCanvasSize={true} unityProvider={unityProvider} style={{ width: '100%', height: '100%', }}    />

      </div>
      </Fragment>
    </div>
  );
      }
}
