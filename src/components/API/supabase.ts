import { Session, User, createClient } from "@supabase/supabase-js";
import { atom, WritableAtom, task } from "nanostores";
import { persistentAtom } from '@nanostores/persistent'

//TODO      [ENV-MIGRATION]
//TODO      [PERSISTENT-ATOM]
//TODO      [POLICY-ABSTRACT]

//?         [DATA]->[USER]
export const isUser: WritableAtom<undefined | Session> = atom(undefined);
export const supabase_user$: WritableAtom<undefined | User> = atom(undefined);
export const username$: WritableAtom<string> = atom("Guest");
export const email$: WritableAtom<string> = atom("");
export const khash$: WritableAtom<number> = atom(0);
//?         [DATA]->[UX]
export const error$: WritableAtom<string> = atom("");
//?         [DATA]=>[DX]
export const log$: WritableAtom<string> = atom("");

//!         [MAIN]
export const supabase = createClient(
	"https://haiukcmcljjfaflqdmjc.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaXVrY21jbGpqZmFmbHFkbWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NTM0MjMsImV4cCI6MjAwNzEyOTQyM30.0taw1sQp2fHLY3byK2cnGtLttXPFRs9GfkxFBNQL6E8",
);


/**
 *! Sessions have be postpone for the time being.
supabase.auth.getSession().then(({ data: { session } }) => {
	if (session) {
		isUser.set(session);
	} else {
		isUser.set(undefined);
	}
});

isUser.subscribe(async (session) => {
	if (session?.user?.id) {
		supabase_user$.set(await supabase_account());
	}
});
 */


export const init = async () => {
	task(async () => {
		console.log("[TASK] -> init");
		_init();
	});
};

export const _init = async () => {
    if (!isUser) {
        supabase_user$.set(await supabase_account());
    }
};


export const log = async () => {
    
}

export const supabase_account = async () => {
	return supabase.auth.getSession().then(({ data: { session } }) => {
		if (session) {
			isUser.set(session);
			return session.user;
		} else {
			isUser.set(undefined);
			return undefined;
		}
	});
};

export const _getProfile = async () => {
    
}

