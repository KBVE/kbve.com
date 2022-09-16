import { h } from 'preact';
import Styles from "./styles.module.scss";
// Place-holder for now.

const VideoComponent = ({ src = null, id = null, description=null, display = true, header = false}) => {
    if (header)
    return (
          <>
          <script type="module" src="https://cdn.jsdelivr.net/npm/@vidstack/player@next/cdn/bundle.js">
          </script>
          
          </>
    )
  
    if (display)
      return (
        <div className={Styles.github}>
          {description}

        <vds-media>
          <vds-hls poster="https://media-files.vidstack.io/poster.png">
            <video src="https://media-files.vidstack.io/hls/index.m3u8" preload="none"></video>
          </vds-hls>
          <vds-play-button>
            <div class="media-play">Play</div>
            <div class="media-pause">Pause</div>
          </vds-play-button>
        </vds-media>
   
        </div>
      );
    else return <div>ඞ</div>;
  };
  



  export default VideoComponent;
  