"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const starWarsSchema_1 = require("./schema/starWarsSchema");
async function main() {
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new apollo_server_1.ApolloServer({ schema: starWarsSchema_1.default });
    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}
main();
