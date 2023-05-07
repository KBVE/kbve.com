//!     [Webmaster] : Tools Module
//?     Webmaster Tools to make it easier to manage your website(s).

import DOMPurify from "dompurify";

// Functions Below by Kory Becker

function getHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
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
  var hostName = getHostName(url);
  var domain = hostName;

  if (hostName != null) {
    var parts = hostName.split(".").reverse();

    if (parts != null && parts.length > 1) {
      domain = parts[1] + "." + parts[0];

      if (hostName.toLowerCase().indexOf(".co.uk") != -1 && parts.length > 2) {
        domain = parts[2] + "." + domain;
      }
    }
  }

  return domain;
}

const Webmaster = ({ dork = "" }) => {
  const [domain, setDomain] = useState(null);

  useEffect(() => {
    const sanitizeData = async () => {
      const _url = getDomain(dork);
      var clean = DOMPurify.sanitize(_url, {
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

export default Webmaster;
