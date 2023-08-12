import { atom, WritableAtom, task } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const uuid$: WritableAtom<string> = atom("");
export const username$: WritableAtom<string> = atom("");
export const avatar$: WritableAtom<string> = atom("https://source.unsplash.com/192x192/?portrait");
export const email$: WritableAtom<string> = atom("");
export const khash$: WritableAtom<number> = atom(0);
export const github$: WritableAtom<string> = atom("");
export const instagram$: WritableAtom<string> = atom("");

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

export const __pullProfile = async () => {
    task(async () => {
		log("Starting Pull -> Profile");
	});
}

export const notification = async (error: string) => {
	task(async () => {
		notification$.set(error);
	});
};
