import { ApolloServer } from "apollo-server";
import starWarsSchema from "./starWarsSchema";

async function main(): Promise<void> {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ schema: starWarsSchema });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();
