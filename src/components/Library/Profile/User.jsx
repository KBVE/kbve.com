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
export const UserName = () => {
    const $user = useStore(user$);
    const $username = $user?.name || 'Guest';
    return (
        <>
            {$username || (
                <div
                    className={
                        'w-[125px] h-[24px] rounded bg-gray-600 animate-pulse inline-flex ml-2 mr-2'
                    }
                />
            )}
        </>
    );
}
export const UserAvatar = () => {
    const $user = useStore(user$);
    return (
        <>
            <img
                src={
                    $user?.email
                        ? Gravatar({ email: $user?.email })
                        : 'https://source.unsplash.com/192x192/?portrait'
                }
                alt=""
                className="self-center flex-shrink-0 w-48 h-48 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
            />
        </>
    );
};