import { h } from 'preact';
const Redirect = ({url = "https://kbve.com", display = true}) => {
    if(display)
	return (
        <div>
            <meta http-equiv="refresh" content={`0;URL='${url}'`} /> 
            <script> window.location={url} </script>
        </div>

        );
    else
        return (<div>ඞ</div>);

}

export default Redirect;