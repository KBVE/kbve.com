import { Interweave, Markup  } from 'interweave';

function decodeHTMLEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = decodeURI(text);
    return textArea.value;
  }

const CVEditor = () => {

    const url = new URL(window.location.href);
    const decode = decodeHTMLEntities(url.hash.slice(1));
    return <Markup content={decode} />;
   
  };
  
export default CVEditor;