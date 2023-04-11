//!     Search Hash Module
//?     Quickly access the search engine using the #.
//*     The tool is meant to make it easier for users
//*     [IMPORT]
import DOMPurify from "dompurify";

const Search = ({}) => {
  //!     There might be security issues, so I will only keep this light.
  //*     var clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {html: false, mathMl: false, svg: false}});

  const url = new URL(window.location.href);
  const searchParams = url.hash;
  let clean = DOMPurify.sanitize(searchParams, {
    USE_PROFILES: { html: false, mathMl: false, svg: false },
  });
  if (clean) {
    clean = clean.slice(1);
    window.location = `https://kbve.com/search/?q=${clean}`;
  }
};

export default Search;
