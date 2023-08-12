import { Session, User, createClient } from "@supabase/supabase-js";
import { atom, WritableAtom, task } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

import * as kbve from "@c/kbve";

import * as Storage from "./storage";

//TODO      [ENV-MIGRATION]
//TODO		[SESSION-MANAGEMENT]
//TODO      [PERSISTENT-ATOM]
//TODO      [POLICY-ABSTRACT]

//*			__function for Cache->Routing
//*			_function for Supabase->Routing

//?         [DATA]->[USER]
export const isUser: WritableAtom<undefined | Session> = atom(undefined);
export const supabase_user$: WritableAtom<undefined | User> = atom(undefined);

//!         [MAIN]
export const supabase = createClient(
	kbve.supabase_api,
	kbve.supabase_projectId,
);

supabase.auth.getSession().then(({ data: { session } }) => {
	session ? isUser.set(session) : isUser.set(undefined);
});

supabase.auth.onAuthStateChange((_event, session) => {
	session ? isUser.set(session) : isUser.set(undefined);
});

isUser.subscribe(async (session) => {
	session?.user?.id
		? supabase_user$.set(await supabase_account())
		: supabase_user$.set(undefined);
});

export const supabase_account = async () => {
	try {
		return (await supabase.auth.getSession()).data.session?.user;
	} catch (error) {
		return undefined;
	}
};

export const getProfile = async ({ __cache = true }: { __cache?: boolean }) => {
	
	__cache ? Storage.__getProfile() : _getProfile();
};

export const _getProfile = async () => {
	task(async () => {
		Storage.log(" Starting Supabase -> Profile Table");
		const userData = await supabase_account();
		if (userData?.id) {
			Storage.tasker(Storage.email$, userData?.email);
			Storage.tasker(Storage.uuid$, userData?.id);
			_pullProfile(userData?.id);
		}
	});
};

export const _pullProfile = async (uuid: string) => {
	task(async () => {
		const { data: profile } = await supabase
			.from("profiles")
			.select("id, username, avatar_url, website")
			.eq("id", uuid)
			.single();
		if (profile?.username) Storage.tasker(Storage.username$, profile?.username);

		console.log(profile);
	});
};
