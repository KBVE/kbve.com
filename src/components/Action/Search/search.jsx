//!     KBVE Search Module
//?     The Search Module will grab the data points from each instance
//*     [IMPORT]
import DOMPurify from "dompurify";

const SearchData = ({}) => {
  //TODO  Sanitize the input data.
  //*     var clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {html: false, mathMl: false, svg: false}});
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  let clean = DOMPurify.sanitize(searchParams.get("q"), {
    USE_PROFILES: { html: false, mathMl: false, svg: false },
  });
  console.log(clean);
  if (clean) {
    return (
      <div>
        <div className="gcse-search"></div>
      </div>
    );
  }
};

export default SearchData;
