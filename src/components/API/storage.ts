import { atom, WritableAtom, task } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const uuid$: WritableAtom<string> = atom("");
export const username$: WritableAtom<string> = atom("");
export const email$: WritableAtom<string> = atom("");
export const khash$: WritableAtom<number> = atom(0);
//?         [DATA]->[UX]
export const error$: WritableAtom<string> = atom("");
export const notification$: WritableAtom<string> = atom("");
export const fetchProfile$: WritableAtom<string> = atom("");
//?         [DATA]=>[DX]
export const log$: WritableAtom<string> = atom("");

export const log = async (log: string) => {
	task(async () => {
		log$.set(log);
		console.log(`[LOG] ${log$.get()}`);
	});
};

export const tasker = async (__key: WritableAtom, __data) => {
	task(async () => {
		log(`Storing ${__data} into atom!`);
        __key.set(__data);


	});
};

export const __getProfile = async () => {
	task(async () => {
		log("Starting Cache -> Profile");
	});
};

export const notification = async (error: string) => {
	task(async () => {
		notification$.set(error);
	});
};
