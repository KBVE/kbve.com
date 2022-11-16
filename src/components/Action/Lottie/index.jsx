import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Lottie = ({json = null, width = null, height = null, ctl = false}) => {

    return (<>
        <Player
    autoplay={true}
    loop={true}
    src={json}
    style={{}}
    >
    <Controls visible={ctl} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </>)
}

export default Lottie;