import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Lottie = ({id = null,ref = null, json = null, autoplay = true, _kbve_style = false, width = null, height = null, styler = "", ctl = false}) => {

    return (<>
        <Player
    id={id}
    ref={ref}
    autoplay={autoplay}
    loop={true}
    src={json}
    style={{ width: width, height: height}}
    className={styler}
    >
    <Controls visible={ctl} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </>)
}

export default Lottie;