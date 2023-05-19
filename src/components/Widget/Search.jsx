//!     KBVE Search Module
//?     The Search Module will grab the data points from each instance.
//*     [IMPORT]
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

//!     [Function]
//?     Both functions below are from Gibolt to address the _blank target vulnerability.
const onClickUrl = (url) => {
  return () => openInNewTab(url);
};
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const SearchData = ({ dork = "" }) => {
  //TODO  Under settings add more dorks for Google, to refine and make searching easier.

  //*     [DATA]
  const [query, setQuery] = useState(null);
  //const [se, setEngine] = useState(engine);

  //*     [useEffect]
  useEffect(() => {
    const sanitizeData = async () => {
      const url = new URL(window.location.href);
      const searchParams = url.searchParams;
      const clean = DOMPurify.sanitize(searchParams.get("q"), {
        USE_PROFILES: { html: false, mathMl: false, svg: false },
      });
      setQuery(clean);
    };
    sanitizeData();
  }, []);

  if (query) {
    return (
      <>
        <div className="space-x-2">
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(
              `https://kbve.com/search?q=${query}+site:reddit.com`
            )}
          >
            +Reddit
          </button>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(
              `https://kbve.com/search?q=${query}+site:stackoverflow.com`
            )}
          >
            +SOF
          </button>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(
              `https://kbve.com/search?q=${query}+site:kbve.com`
            )}
          >
            +KBVE
          </button>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(
              `https://duckduckgo.com/?q=${query}&kp=-1&kl=us-en`
            )}
          >
            DDG
          </button>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(
              `https://you.com/search?q=${query}&tbm=youchat&cfr=chat`
            )}
          >
            YOU
          </button>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(`http://ecosia.org/search.php?q=${query}`)}
          >
            Ecosia
          </button>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded shadow-2xl ring-2 ring-fushsia-900/5  dark:bg-gray-100 dark:text-gray-800"
            onClick={onClickUrl(`https://yep.com/web?q=${query}`)}
          >
            Yep
          </button>
        </div>
      </>
    );
  }
};

export default SearchData;
