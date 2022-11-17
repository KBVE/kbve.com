//* Interactive extension of Lottie
//! WIP - This Component is currently Broken.

import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import create from "@lottiefiles/lottie-interactivity";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef(); // Reference
      this.json 
    }
    componentDidMount() {
      this.myRef.current.addEventListener('load', function (e) {
        create({
          mode: 'scroll',
          player: '#firstLottie',
          actions: [
            {
              visibility: [0, 1],
              type: 'seek',
              frames: [0, 100],
            },
          ],
        });
      });
    }
    render() {
      return (
        <div className="App">
          <Player
            ref={this.myRef} // Reference
            id="firstLottie"
            controls={false}
            mode="normal"
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ width: '320px' }}
          >
           <Controls visible={ctl} buttons={['play', 'repeat', 'frame', 'debug']} />
           </Player>
        </div>
      );
    }
  }
  
  export default App;