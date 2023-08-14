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

import * as ClientStorage from '../storage';


/** Setup */
export const appwriteClient = new Client()
	.setEndpoint("https://ap.kbve.com/v1")
	.setProject("6436a6dc9a6b48db802f");

export const appwriteDatabases = new Databases(appwriteClient);
export const appwriteStorage = new Storage(appwriteClient);
export const appwriteFunctions = new Functions(appwriteClient);

/** Database */
/** We are currently not using these but will keep them here for testing */
export interface BlogPost extends Models.Document {
	title: string;
	date: string;
	description: string;
	content: string;
	slug: string;
	imageurl: string;
}
export type BlogPostList = Models.DocumentList<BlogPost>;

export interface BlogComment extends Models.Document {
	postId: string;
	comment: string;
}
export type BlogCommentList = Models.DocumentList<BlogComment>;

/** Account */
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


export const JWT = async () => {
	try {
		return appwriteAccount.createJWT()
	} catch (error) {
		return error;
	}

}	

export const OAuth2 = async ({provider, valid = 'https://kbve.com/account/', failure = 'https://kbve.com/account/login/?failure'} : {provider: string, valid?: string, failure?: string}) => {
	try {
		return appwriteAccount.createOAuth2Session(
			provider,
			valid,
			failure,
		)
	} catch (error) {
		return error;
	}
}



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

export const create = async (
	email: string,
	password: string,
	name: string,
) => {
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
			ClientStorage.locker('email', String(userData?.email));
			ClientStorage.locker('uuid', String(userData?.$id));
			ClientStorage.locker('last', String(userData?.$updatedAt));
            ClientStorage.locker('emailVerification', String(userData?.emailVerification));
            ClientStorage.locker('phoneVerification', String(userData?.phoneVerification));
            ClientStorage.locker('phone', String(userData?.phone));
			
		}
	});
}