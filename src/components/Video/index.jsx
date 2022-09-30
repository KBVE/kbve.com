import { h } from "preact";
import Styles from "./styles.module.scss";
// Place-holder for now.

const VideoComponent = ({
  width = "640px",
  height = "360px",
  src = null,
  id = null,
  description = null,
  display = true,
  header = false,
  iframe = false,
}) => {
  if (header)
    return (
      <>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@vidstack/player@next/cdn/bundle.js"
        ></script>
      </>
    );
  // Temporary fix until vidstack has youtube options within their video embed.
  // https://github.com/KBVE/kbve.com/issues/25
  if (display && iframe && src == "yt")
    return (
      <>
        <div className={Styles.overlay}>
          <p>{description}</p>

          <iframe
            id="ytplayer"
            type="text/html"
            width={'100%'}
            src={
              `https://www.youtube.com/embed/` +
              id +
              `?&origin=https://kbve.com"`
            }
            frameborder="0"
          ></iframe>
        </div>
      </>
    );

  if (display && !iframe)
    return (
      <div className={Styles.github}>
        {description}

        <vds-media>
          <vds-hls poster="https://media-files.vidstack.io/poster.png">
            <video
              src="https://media-files.vidstack.io/hls/index.m3u8"
              preload="none"
            ></video>
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
