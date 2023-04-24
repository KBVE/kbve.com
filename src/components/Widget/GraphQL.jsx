//*         [AppWrite]  =>  [GraphQL]
//!         [WIP]
//*         [IMPORT]
import { Client, Graphql } from "appwrite";
//*         [DATA]
const client = new Client();
client.setEndpoint("https://ap.kbve.com/v1").setProject("6436a6dc9a6b48db802f");
export const graphql = new Graphql(client);
