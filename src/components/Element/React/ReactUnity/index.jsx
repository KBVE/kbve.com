import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
function App({ apps }) {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: apps.loaderUrl,
    dataUrl: apps.dataUrl,
    frameworkUrl: apps.frameworkUrl,
    codeUrl: apps.codeUrl,
  });
  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <div className="container place-content-center justify-center items-center">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Zane's Rage is Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity bg-offset rounded-2xl self-auto" unityProvider={unityProvider} style={{ width: 1280, height: 720, }}  />
    </div>
  );
}

export default App;