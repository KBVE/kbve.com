import { atom, WritableAtom, task } from "nanostores";
import { persistentAtom } from '@nanostores/persistent';

export const uuid$: WritableAtom<string> = atom('');
export const username$: WritableAtom<string> = atom("Guest");
export const email$: WritableAtom<string> = atom("");
export const khash$: WritableAtom<number> = atom(0);
//?         [DATA]->[UX]
export const error$: WritableAtom<string> = atom("");
//?         [DATA]=>[DX]
export const log$: WritableAtom<string> = atom("");


export const log = async( log : string) => {
    task(async() => {
        log$.set(log);
        console.log(`[LOG] ${log$.get()}`);
    })
}