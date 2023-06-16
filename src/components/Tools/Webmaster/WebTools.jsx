import React from 'react';

//?     Both functions below are from Gibolt to address the _blank target vulnerability.
const onClickUrl = (url) => {
	return () => openInNewTab(url);
};

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
	if (newWindow) newWindow.opener = null;
};

export const CompButton = (__url, __text) => {
	return (
		<>
			<button
				type="button"
				className="m-2 px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800"
				onClick={onClickUrl(__url)}
			>
				{__text}
			</button>
		</>
	);
};

export const GoogleSearchConsole = (__domain) => {
	return (
		<>
			<div>
				{CompButton(
					`https://search.google.com/search-console?resource_id=sc-domain:${__domain}`,
					'Google Search Console',
				)}
			</div>
		</>
	);
};

export const PageSpeed = (__domain) => {
	return (
		<>
			<div>
				{CompButton(
					`https://pagespeed.web.dev/analysis?url=${__domain}`,
					'WebDev Page Speed',
				)}
			</div>
		</>
	);
};

export const AhrefTool = (__domain) => {
	return (
		<>
			<div>
				{CompButton(
					`https://app.ahrefs.com/v2-site-explorer/overview?mode=subdomains&target=${__domain}`,
					'Ahrefs SEO Report',
				)}
			</div>
		</>
	);
};

export const GoogleRawIndex = (__domain) => {
	return (
		<>
			<div>
				{CompButton(
					`https://www.google.com/search?q=site%3A${__domain}`,
					'Google Raw Index',
				)}
			</div>
		</>
	);
};

export const GoogleThirdPartyIndex = (__domain) => {
	return (
		<>
			<div>
				{CompButton(
					`https://www.kbve.com/search/?q=site%3A${__domain}`,
					'Google 3rd Party Index',
				)}
			</div>
		</>
	);
};

export const WebTools = (__domain) => {
	return (
		<>
			{GoogleSearchConsole(__domain)}
			{PageSpeed(__domain)}
			{AhrefTool(__domain)}
			{GoogleRawIndex(__domain)}
			{GoogleThirdPartyIndex(__domain)}
		</>
	);
};
