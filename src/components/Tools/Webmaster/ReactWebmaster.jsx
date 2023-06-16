//?     Webmaster Tools to make it easier to manage your website(s).

import React from 'react';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';

//* [START] -> Domain Functions Below by Kory Becker
function getHostName(url) {
	const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
	if (
		match != null &&
		match.length > 2 &&
		typeof match[2] === 'string' &&
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
		const parts = hostName.split('.').reverse();

		if (parts != null && parts.length > 1) {
			domain = `${parts[1]}.${parts[0]}`;

			if (hostName.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
				domain = `${parts[2]}.${domain}`;
			}
		}
	}

	return domain;
}
//* [END] -> Domain Functions
///
///
//! [START] -> ReactWebmaster
const ReactWebmaster = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [domain, setDomain] = React.useState(null);
  const [webmasterError, setWebmasterError] = React.useState('');
  
	React.useEffect(() => {
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

//! [END] -> ReactWebmaster
export default ReactWebmaster;
