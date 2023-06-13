//?     [Logout] - React Logout - Going to keep this very simple for now.
//*     [IMPORT]
import React, { useEffect, useState } from 'react';
import { user$, logout } from '@lib/appwrite';
import { useStore } from '@nanostores/react';

const ReactLogout = () => {
	const $user = useStore(user$);

	const [____warning, setWarning] = useState(false);

	const UserGuest = () => {
		return (
			<>
				<div className="mt-24 space-y-12">
					<div className="space-y-12">Warning!</div>
					You are not logged in buddy!
				</div>
			</>
		);
	};

	const UserLogout = () => {
		if ($user?.name) {
			logout();
		} else {
			setWarning(true);
			window.location.href = '/account/login';
		}
	};

	useEffect(() => {
		UserLogout();
	}, []);

	return <>{____warning && UserGuest()}</>;
};

export default ReactLogout;
