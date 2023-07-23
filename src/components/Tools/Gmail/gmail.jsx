import DOMPurify from "dompurify";

const Gmail = ({}) => {
    //TODO Re-orangize the Gmail information
    //TODO  Sanitize the input data.
    //?     var clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {html: false, mathMl: false, svg: false}});
    //TODO  Tab System for the different search engines and have extra data points.
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const clean = DOMPurify.sanitize(searchParams.get("q"), {
        USE_PROFILES: { html: false, mathMl: false, svg: false },
    });
    console.log(clean);
    //if (clean) {
    return (
        <div>

        </div>
    );
    //}
};

export default Gmail;
