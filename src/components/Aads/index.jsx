import { h } from 'preact';
const Aads = ({width = null, height = null, display = true, adaptive = true, square = false}) => {

    if(display && square)
    (
        <div>
            <iframe data-aa='2082301' loading='lazy' src='//ad.a-ads.com/2082301?size=250x250' style='width:250px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
        </div>
    );

    if(display && adaptive)
	return (
        <div>
        <iframe data-aa='2082299' loading='lazy' src='//acceptable.a-ads.com/2082299?size=Adaptive&background_color=161614&text_color=E7AF86&title_color=642727&title_hover_color=733030&link_color=E7AF86&link_hover_color=eebdbd' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>
        </div>
        );
    else
        return (<div>ඞ</div>);

}

export default Aads;
