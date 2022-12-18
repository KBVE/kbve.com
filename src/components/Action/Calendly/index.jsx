import { Hidden } from '@mui/material';
import { h } from 'preact';
const Calendly = ({user = 'kbve', width = 320, height = 700, display = true, hide = 0, text_color="", primary_color="", className = ""}) => {

    if(display)
	return (
        <>
            <div className={className} data-url={
                    `https://calendly.com/${user}?hide_landing_page_details=${hide}&hide_gdpr_banner=${hide}&text_color=${text_color}&primary_color=${primary_color}`
                } 
                    style={{
                        minWidth: `${width}px`,
                        height: `${height}px`,
                        overflow: 'hidden',
                        
                    }}
                    />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
         </>  

            );
    else
        return (<div>ඞ</div>);

}

export default Calendly;
