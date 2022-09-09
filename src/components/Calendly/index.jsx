import { h } from 'preact';
const Calendly = ({user = 'kbve', width = 320, height = 630, display = true, hide = 0, text_color="", primary_color=""}) => {

    if(display)
	return (
            <div>
                <div class="calendly-inline-widget" data-url={
                    `https://calendly.com/`
                    + user +
                    `?hide_landing_page_details=`+hide+`&hide_gdpr_banner=`+hide+`&text_color=`+text_color+`&primary_color=`+primary_color
                } 
                    style={
                        `min-width:`+width+`px;height:`+height+`px;`
                    }
                    ></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>

            );
    else
        return (<div>ඞ</div>);

}

export default Calendly;
