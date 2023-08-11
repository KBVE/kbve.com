import { Session, User, createClient } from "@supabase/supabase-js";
import { atom, WritableAtom, task } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

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
	"https://haiukcmcljjfaflqdmjc.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaXVrY21jbGpqZmFmbHFkbWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NTM0MjMsImV4cCI6MjAwNzEyOTQyM30.0taw1sQp2fHLY3byK2cnGtLttXPFRs9GfkxFBNQL6E8",
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
		return (await supabase.auth.getSession()).data.session?.user
	} catch (error) {
		return undefined;
	}
};

export const getProfile = async ({ cache = true }: { cache: boolean }) => {
	cache ? Storage.__getProfile() : _getProfile();
};

export const _getProfile = async () => {
	task(async () => {
		Storage.log(" Starting Supabase -> Profile Table");
	});
};
