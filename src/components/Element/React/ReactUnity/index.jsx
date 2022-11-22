//*     [JSX] -> [ReactUnity]
//?     Reference - https://kbve.com/application/javascript#react-unity

import React, { Fragment, useState, useEffect, useCallback  } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Unity, useUnityContext } from "react-unity-webgl";

function App({ apps }) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

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
  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);
  function handleClickSpawnEnemies() {
    sendMessage("GameController", "SpawnEnemies", 100);
  }

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <div className="container place-content-center justify-center items-center py-12">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        // style={{ width: 1280, height: 720, }}
        <div className="loading-overlay">
      <p>Zane's Rage is Loading... ({loadingPercentage}%)</p>

        </div>
      )}
      <Unity className="unity rounded-3xl self-auto" unityProvider={unityProvider} style={{ width: 1280, height: 720, }}  />
    </div>
  );
}

export default App;