//*         [IMPORT]
import { graphql } from "@c/Widget/GraphQL";
import { Account, AppwriteException, Client, Models, Graphql } from "appwrite";
import { atom, WritableAtom } from "nanostores";
//*         [DATA]
export const _client = new Client()
  .setEndpoint("https://ap.kbve.com/v1")
  .setProject("6436a6dc9a6b48db802f");
export var _c = _client;

export const _aw = new Account(_c);

export const _graphql = new Graphql(_c);
export const _g = graphql;

export const _sesh: WritableAtom<undefined | Models.Session> = atom(undefined);

export const _u$: WritableAtom<
  // @ts-expect-error
  undefined | Models.Account<Models.Preferences>
> = atom(undefined);

//?         [FUNCTION]

_aw.getSession("current").then(
  function (response) {
    _sesh.set(response);
  },
  function (error) {
    _sesh.set(undefined);
  }
);

_sesh.subscribe(async (session) => {
  if (session?.userId) {
    _u$.set(await account());
  }
});

export const account = async () => {
  try {
    return _aw.get();
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw appwriteError.message;
  }
};
