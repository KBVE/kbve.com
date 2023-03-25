//!     KBVE Gmail Generator Module
//?     The Generator Module will construct unique gmails to help you organize.
//?     Unique gmails will be stored in the nanostore / locally and not sent anywhere outside of the user client.
//*     [IMPORT]
import DOMPurify from "dompurify";

const Gmail = ({}) => {
  //TODO Re-orangize the Gmail information
  //TODO  Sanitize the input data.
  //*     var clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {html: false, mathMl: false, svg: false}});
  //TODO  Tab System for the different search engines and have extra data points.
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  let clean = DOMPurify.sanitize(searchParams.get("q"), {
    USE_PROFILES: { html: false, mathMl: false, svg: false },
  });
  console.log(clean);
  //if (clean) {
  return (
    <div>
      <div className="gcse-search"></div>
    </div>
  );
  //}
};

export default Gmail;
