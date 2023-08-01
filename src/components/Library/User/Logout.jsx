//?     [LOGOUT]
//*     [IMPORT]
import React, { useEffect } from 'react';
import { user$, logout } from '@lib/appwrite';
import { useStore } from '@nanostores/react';

const Logout = () => {
	const $user = useStore(user$);

	if ($user?.name) {
		logout().then(() => {
			window.location.href = '/account/login';
		});
	} else {
		window.location.href = '/account/login';
	}
};

export default Logout;
