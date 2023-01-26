import { h } from "preact";
import Styles from "./styles.module.scss";

const GithubIFrameComponent = ({ src = null, height = null, display = true, lang = '' }) => {
  if (display)
    return (
      <div className={Styles.github}>
        <script
          src={
            `https://kbve.com/embed/github/embed.js?target=https://github.com/kbve/kbve.com/blob/main/public/${src}&style=dark&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on`
          }
        >  const player = new Plyr('#player');
        </script>
      </div>
    );
  else return <div>ඞ</div>;
};

export default GithubIFrameComponent;
