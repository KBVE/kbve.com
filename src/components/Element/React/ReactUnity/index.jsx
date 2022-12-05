//*     [JSX] -> [ReactUnity]
//?     Reference - https://kbve.com/application/javascript#react-unity

import React, { Fragment, useState, useEffect, useCallback, useRef  } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Unity, useUnityContext } from "react-unity-webgl";

function App({ apps, buttonClass }) {
  const [isPlay, setPlay] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();
  const [buttonClassName, setButtonClass] = useState(buttonClass);
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
    if (isPlay) { return }
    setPlay(true)
    await API.sendRequest()
    if (isMounted.current){   setPlay(false)  }
  }, [isPlay]) 


  const { unityProvider, sendMessage, addEventListener, removeEventListener , isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: apps.loaderUrl,
    dataUrl: apps.dataUrl,
    frameworkUrl: apps.frameworkUrl,
    codeUrl: apps.codeUrl,
  });

  const handleGameOver = useCallback((userName, score) => {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }, []);


  function focusCanvas() {
    if (canvas.current) {
      canvas.current.focus();
    }
  }
  
  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);
  
  function handleClickSpawnEnemies() {
    sendMessage("GameController", "SpawnEnemies", 100);
  }

  //? Pixel Issues

    // We'll use a state to store the device pixel ratio.
    const [devicePixelRatio, setDevicePixelRatio] = useState(
      window.devicePixelRatio
    );
    const handleChangePixelRatio = useCallback(
      function () {
        // A function which will update the device pixel ratio of the Unity
        // Application to match the device pixel ratio of the browser.
        const updateDevicePixelRatio = function () {
          setDevicePixelRatio(window.devicePixelRatio);
        };
        // A media matcher which watches for changes in the device pixel ratio.
        const mediaMatcher = window.matchMedia(
          `screen and (resolution: ${devicePixelRatio}dppx)`
        );
        // Adding an event listener to the media matcher which will update the
        // device pixel ratio of the Unity Application when the device pixel
        // ratio changes.
        mediaMatcher.addEventListener("change", updateDevicePixelRatio);
        return function () {
          // Removing the event listener when the component unmounts.
          mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
        };
      },
      [devicePixelRatio]
    );
  



  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

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
      <Unity ref={canvas} className="" matchWebGLToCanvasSize={true} unityProvider={unityProvider} style={{ width: 1280, height: 720, }}   devicePixelRatio={devicePixelRatio}   />

      </div>
      </Fragment>
    </div>
  );
      }
}

export default App;