import React from 'react';                                              //?     [CORE]      ->      [React]
import {create} from '@lottiefiles/lottie-interactivity';               //*     [CORE]      ->      [Create]@[Lottie]
import "@lottiefiles/lottie-player";                                    //*     [CORE]      ->      [lottie-player]
//import { Player, Controls } from '@lottiefiles/react-lottie-player';  //?     [CORE]      ->      [player&controller]@[Lottie]W[React]


export default function LottieInt({id, name, json, width, height, action, mode, className}) {
    const [lottie_name, setName] = React.useState(name);
    const [lottie_src, setJSON] = React.useState(json);
    const [lottie_action, setAction] = React.useState(action);
    const [lottie_mode, setMode] = React.useState(mode);
    const [lottie_width, setWidth] = React.useState(width);
    const [lottie_height, setHeight] = React.useState(height);
    const [lottie_classname, setClass] = React.useState(className);
    const [lottie_id, setID] = React.useState(id);
    const _k_lottie = React.useRef(null); // React.createRef();

    React.useEffect(() => {
      _k_lottie.current.addEventListener('load', function (e) {  
        create({
          mode: lottie_mode,
          player: document.getElementById(lottie_id),
          actions: lottie_action,
        });
      });
    }, [_k_lottie]);

    return (
            <>
                    <lottie-player
                    className={lottie_classname}
                    ref={_k_lottie} 
                    id={lottie_id}
                    mode="normal"
                    src={lottie_src}
                    style={{ width: width , height: height }}
                    ></lottie-player>
            </>
   
    )
  }