import { h } from 'preact';
const HubspotLiveChat = ({width = null, height = null, display = true}) => {

    if(display)
	return (
        <div>
                <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20854121.js" />
        </div>
        );
    else 
    return ( 
    
    
    <div>ඞ</div>

    );
    
}

export default HubspotLiveChat;
