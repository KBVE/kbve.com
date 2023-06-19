import React from 'react';
import { elementButtonClick, BgWrapper } from '@lib/tools.jsx';
//import { useStore } from '@nanostores/react';
//import { placeData, data$ } from "@lib/appwrite";

const GoogleSearchConsole = (__domain) => {
	return (
		<>
			<div>
				{elementButtonClick(
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
				{elementButtonClick(
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
				{elementButtonClick(
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
				{elementButtonClick(
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
				{elementButtonClick(
					`https://www.kbve.com/search/?q=site%3A${__domain}`,
					'Google 3rd Party Index',
				)}
			</div>
		</>
	);
};

export const BuiltWith = (__domain) => {
	return (
		<>
			<div>
				{elementButtonClick(`https://builtwith.com/${__domain}`, 'Built With')}
			</div>
		</>
	);
};

export const WebTools = (__domain) => {
	return (
		<>
			<section className="">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
					{SEOList(__domain)}
					{GoogleSearchConsole(__domain)}
					{PageSpeed(__domain)}
					{AhrefTool(__domain)}
					{BuiltWith(__domain)}
					{GoogleRawIndex(__domain)}
					{GoogleThirdPartyIndex(__domain)}
				</div>
			</section>
		</>
	);
};

export const SEOList = (__domain) => {
		return (
		<>
			{' '}
			<BgWrapper src='https://images.unsplash.com/photo-1682686581484-a220483e6291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'>
				<div className="rounded-lg p-8 md:p-12 mb-8">
					<a
						href="/#"
						className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
					>
						<svg
							className="w-3 h-3 mr-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<title>SEO List</title>
							<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
						</svg>
						Tutorial
					</a>
					<h1 className="text-gray-900 dark:text-white text-md font-extrabold mb-2">
						SEO / Marketing Quick Links
					</h1>
					<p className="text-sm font-normal text-gray-500">
						Links to 3rd party applications and software to help manage your SEO
						/ SEM.
					</p>

					<a
						href="/#"
						className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>SEO Call</title>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>{' '}
			</BgWrapper>
		</>
	);
};

export const DevList = (__domain) => {
	return <></>;
};

export const AdditionalList = (__domain) => {
	return <></>;
};
