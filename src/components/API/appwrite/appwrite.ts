//*         [IMPORT]
import {
	Account,
	AppwriteException,
	Client,
	Functions,
	Databases,
	Storage,
	ID,
	Models,
} from "appwrite";
import { atom, WritableAtom, task } from "nanostores";

import * as ClientStorage from "../storage";

/** Setup */
export const appwriteClient = new Client()
	.setEndpoint("https://panel.kbve.com/v1")
	.setProject("kbve");

export const appwriteDatabases = new Databases(appwriteClient);
export const appwriteStorage = new Storage(appwriteClient);
export const appwriteFunctions = new Functions(appwriteClient);
export const appwriteAccount = new Account(appwriteClient);

export const isLoggedIn: WritableAtom<undefined | Models.Session> =
	atom(undefined);

// Check for session
appwriteAccount.getSession("current").then(
	function (response) {
		isLoggedIn.set(response);
	},
	function (error) {
		isLoggedIn.set(undefined);
	},
);
// @ts-ignore
export const user$: WritableAtom<undefined | Models.Account<Models.Preferences>> = atom(undefined);

export const function$: WritableAtom<undefined | Models.Execution> =
	atom(undefined);

export const api$: WritableAtom<Boolean> = atom(false);

export const error$: WritableAtom<undefined> = atom(undefined);

export const data$: WritableAtom<undefined> = atom(undefined);

isLoggedIn.subscribe(async (session) => {
	if (session?.userId) {
		user$.set(await account());
	}
});

// export const exe = async () => {
// 	task(async () => {
// 		try {
// 			return appwriteFunctions.createExecution("register");
// 		} catch (error) {
// 			return error;
// 		}
// 	});
// };

export const JWT = async () => {
	try {
		return appwriteAccount.createJWT();
	} catch (error) {
		return error;
	}
};

export const OAuth2 = async ({
	provider,
	valid = "https://kbve.com/account/",
	failure = "https://kbve.com/account/login/?failure",
}: { provider: string; valid?: string; failure?: string }) => {
	try {
		return appwriteAccount.createOAuth2Session(provider, valid, failure);
	} catch (error) {
		return error;
	}
};

export const login = async (email: string, password: string) => {
	try {
		const session = await appwriteAccount.createEmailSession(email, password);
		isLoggedIn.set(session);
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError;
	}
};

export const logout = async () => {
	try {
		const session = isLoggedIn.get();
		console.log(session);
		if (session?.$id) {
			await appwriteAccount.deleteSession(session?.$id);
			isLoggedIn.set(undefined);
		}
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError;
	}
};

export const create = async (email: string, password: string, name: string) => {
	try {
		await appwriteAccount.create(ID.unique(), email, password, name);
		const session = await appwriteAccount.createEmailSession(email, password);
		isLoggedIn.set(session);
		window.location.href = "/account/profile";
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError.message;
	}
};

export const account = async () => {
	try {
		return appwriteAccount.get();
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError.message;
	}
};

export const getUser = async () => {
	task(async () => {
		ClientStorage.log(" Starting AppWrite -> Session -> UserData");
		const userData = await account();
		if (userData?.$id) {
			ClientStorage.locker("email", String(userData?.email));
			ClientStorage.locker("uuid", String(userData?.$id));
			ClientStorage.locker("last", String(userData?.$updatedAt));
			ClientStorage.locker(
				"emailVerification",
				String(userData?.emailVerification),
			);
			ClientStorage.locker(
				"phoneVerification",
				String(userData?.phoneVerification),
			);
			ClientStorage.locker("phone", String(userData?.phone));
		}
	});
};
