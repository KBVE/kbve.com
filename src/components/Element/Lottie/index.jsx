import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Lottie = ({id = null, json = null, autoplay = true, _kbve_style = false, width = null, height = null, styler = null, ctl = false}) => {

    return (<>
        <Player
    id={id}
    autoplay={autoplay}
    loop={true}
    src={json}
    style={{ width: width, height: height}}
    >
    <Controls visible={ctl} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </>)
}

export default Lottie;