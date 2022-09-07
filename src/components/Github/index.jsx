import { h } from 'preact';
import Styles from './styles.module.scss';

const Github = ({src = null, height = null, display = true}) => {

    if(display)
	return (
        <div className={Styles.github}>
            <script src={`https://kbve.com/embed/github/embed.js?target=https://kbve.com/data/` + src + `&style=dark&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on`}></script>
        </div>

        );
    else
        return (<div>ඞ</div>);

}

export default Github;
