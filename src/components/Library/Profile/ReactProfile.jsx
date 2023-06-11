//?     [Profile] - React Profile for KBVE
//*     [IMPORTS]
import React, { useState } from 'react';
import { user$ } from '@lib/appwrite';
import { useStore } from '@nanostores/react';
import MD5 from 'crypto-js/md5';
import ReactIcon from '@lib/SVG/ReactIcon';

function Gravatar({ email = 'example@kbve.com', size = 192 }) {
	return `https://secure.gravatar.com/avatar/${MD5(
		email.toLowerCase().trim(),
	)}?size=${size}&default=mm&rating=g`;
}
const ReactProfile = () => {
	const $user = useStore(user$);

	const UserEmailVerification = () => {
		return $user?.emailVerification ? (
			<div className="flex row gap-2 items-center bg-emerald-500 p-1 px-2 rounded-lg border border-emerald-400">
				<ReactIcon name="mdiEmailCheckOutline" />
				<p className="text-sm">Email Verified</p>
			</div>
		) : (
			<div className="flex row gap-2 items-center bg-rose-500 p-1 px-2 rounded-lg border border-rose-400">
				<ReactIcon name="mdiEmailAlertOutline" />
				<p className="text-sm">Verify Your Email</p>
			</div>
		);
	};

	const UserPhoneVerification = () => {
		return $user?.phoneVerification ? (
			<div className="flex row gap-2 items-center bg-emerald-500 p-1 px-2 rounded-lg border border-emerald-400">
				<ReactIcon name="mdiPhoneCheckOutline" />
				<p className="text-sm">Phone Verified</p>
			</div>
		) : (
			<div className="flex row gap-2 items-center bg-rose-500 p-1 px-2 rounded-lg border border-rose-400">
				<ReactIcon name="mdiPhoneAlertOutline" />
				<p className="text-sm">Verify Your Phone</p>
			</div>
		);
	};

	const UserAvatar = () => {
		return (
			<>
				<img
					src={
						$user?.email
							? Gravatar({ email: $user?.email })
							: 'https://source.unsplash.com/75x75/?portrait'
					}
					alt=""
					className="self-center flex-shrink-0 w-48 h-48 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
				/>
			</>
		);
	};

	const Username = () => {
		return (
			<>
				{$user?.name || (
					<div
						className={
							'w-[125px] h-[24px] rounded bg-gray-600 animate-pulse inline-flex ml-2 mr-2'
						}
					/>
				)}
			</>
		);
	};

	const UserData = () => {
		return (
			<>
				{`Your Email is ${$user?.email} and KBVE defines you as ID: ${$user?.$id} within the API.` || (
					<div
						className={
							'w-[200px] h-[240px] rounded bg-gray-600 animate-pulse inline-flex ml-2 mr-2'
						}
					/>
				)}
			</>
		);
	};

	return (
		<>
			<div className="p-6 sm:p-12 bg-offset">
				<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
					<UserAvatar />
					<div className="flex flex-col">
						<h4 className="text-lg font-semibold text-center md:text-left">
							<Username />
						</h4>
						<p className="text-gray-400">
							<UserData />
						</p>

						<div className="flex flex-col items-start gap-2">
							<UserEmailVerification />
							<UserPhoneVerification />
						</div>
					</div>
				</div>
				<div className="flex justify-center pt-4 space-x-4 align-center">
					<a
						rel="noopener noreferrer"
						href="/#"
						aria-label="GitHub"
						className="p-2 rounded-md text-gray-100 hover:text-violet-400"
					>
						<svg
							viewBox="0 0 496 512"
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4 fill-current"
						>
							<title>Github</title>
							<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
						</svg>
					</a>
				</div>
			</div>
		</>
	);
};

//const ReactProfile = block(RenderProfile);

export default ReactProfile;
//export default block(ReactProfile);
