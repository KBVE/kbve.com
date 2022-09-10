import { h } from 'preact';
import Styles from "./styles.module.scss";
// Place-holder for now.

const VideoComponent = ({ src = null, id = null, description=null, display = true }) => {
    if (display)
      return (
        <div className={Styles.github}>
          {description}

          <script src="https://cdn.plyr.io/3.7.2/plyr.polyfilled.js">  
          </script>
          
          <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css" />


          <video id="player" crossorigin playsinline controls>
          </video>
          <div data-type="youtube" data-video-id="m3952Ft3KCo"></div>
   
        </div>
      );
    else return <div>ඞ</div>;
  };
  
  export default VideoComponent;
  