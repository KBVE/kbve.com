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


export const OAuth2 = async (provider: string) => {
	try {
		return appwriteAccount.createOAuth2Session(
			provider,
			"https://kbve.com/account/",
			"https://kbve.com/account/login/?failure",
		)
	} catch (error) {
		return error;
	}
}



export const login = async (email: string, password: string) => {
	try {
		const session = await appwriteAccount.createEmailSession(email, password);
		isLoggedIn.set(session);
		window.location.href = "/account";
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError.message;
	}
};

export const logout = async () => {
	try {
		const session = isLoggedIn.get();
		console.log(session);
		if (session?.$id) {
			await appwriteAccount.deleteSession(session?.$id);
			isLoggedIn.set(undefined);
			window.location.href = "/account/login";
		}
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError.message;
	}
};

export const register = async (
	email: string,
	password: string,
	name: string,
) => {
	try {
		await appwriteAccount.create(ID.unique(), email, password, name);
		const session = await appwriteAccount.createEmailSession(email, password);
		isLoggedIn.set(session);
		window.location.href = "/account";
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

export const exe = async (functionId, data) => {
	try {
		return appwriteFunctions.createExecution(functionId, data);
	} catch (error) {
		const appwriteError = error as AppwriteException;
		throw appwriteError.message;
	}
};

export const program = async (functionId, data) => {
	if (api$.get()) {
		console.log("[API] is currently running");
		return;
	}
	task(async () => {
		api$.set(true);
		console.log(`Task API -> ${api$.get()}`);
		console.log(`Started Task ${functionId}`);
		console.log(`Data ${data}`);
		function$.set(await exe(functionId, data));
		api$.set(false);
		console.log(`Task API -> ${api$.get()}`);
		console.log("Task Ended");
	});
};

export const getError = async () => {
	try {
		return error$.get();
	} catch (error) {
		return;
	}
};

export const placeData = async (__data) => {
	task(async () => {
		console.log(`[Task API] Setting ${__data}`);
		data$.set(__data);
		console.log(`[Task API] Data Set -> ${data$.get()}`);
	})
};

/** 
 * 

References:

Appwrite Team -> https://github.com/appwrite/demos-for-astro/blob/main/example-blog/src/lib/appwrite.ts

MIT License

Copyright (c) 2023 Appwrite, 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
