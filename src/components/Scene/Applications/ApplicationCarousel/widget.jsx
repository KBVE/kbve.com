//*   [ApplicationCarousel Widget]
//?   Might migrate this out of AstroJS, into its own repo and then turn it into an embed widget.

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./index";

const e = React.createElement;
class AppCarousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return Carousel;
      }
  
      return (
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
      );
    }
  }

  const rad = () => {
        const domContainer = document.querySelector('#applications');
        const root = ReactDOM.createRoot(domContainer);
        root.render(e(AppCarousel));
  }

  export default rad;
