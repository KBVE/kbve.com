//?         Conch.jsx
//*         [IMPORT]
import DOMPurify from "dompurify";
import React from "react";
import useSound from 'use-sound';
//*         [DATA]

//  var yes = new Audio("/assets/audio/yes.ogg");
//  var no = new Audio("/assets/audio/no.ogg");


const Conch = (__conch) => {

    const [conchMsg, setConchMsg] = React.useState({value: ""});
    const conchRef = React.createRef();
    const [loading, setLoading] = React.useState(true);

    const [playYes] = useSound('/assets/audio/yes.mp3', { volume: 0.8});
    const [playNo] = useSound('/assets/audio/no.mp3', {volume: 0.8});


    useEffect(() => {
        setLoading(false);
    }, []);
 
        return (
        <>
         {loading &&
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-orange-400" />}
        </>);
    
    // Use Sound For the Yes and No

}


export default Conch;