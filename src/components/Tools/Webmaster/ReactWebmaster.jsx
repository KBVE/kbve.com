//?     Webmaster Tools to make it easier to manage your website(s).

import React from "react";
import DOMPurify from "dompurify";

//* Functions Below by Kory Becker

function getHostName(url) {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === "string" &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return null;
  }
}
function getDomain(url) {
  const hostName = getHostName(url);
  let domain = hostName;

  if (hostName != null) {
    const parts = hostName.split(".").reverse();

    if (parts != null && parts.length > 1) {
      domain = `${parts[1]}.${parts[0]}`;

      if (hostName.toLowerCase().indexOf(".co.uk") !== -1 && parts.length > 2) {
        domain = `${parts[2]}.${domain}`;
      }
    }
  }

  return domain;
}

const ReactWebmaster = ({ dork = "" }) => {
  const [domain, setDomain] = useState(null);

  useEffect(() => {
    const sanitizeData = async () => {
      const _url = getDomain(dork);
      const clean = DOMPurify.sanitize(_url, {
        USE_PROFILES: { html: false, mathMl: false, svg: false },
      });
      setDomain(clean);
    };
    sanitizeData();
  }, []);

  if (domain) {
    return (
      <>
        <div>{domain}</div>
      </>
    );
  }
};

export default ReactWebmaster;
