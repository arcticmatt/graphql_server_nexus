import * as Query from "./query/Query";

import { makeSchema } from "@nexus/schema";

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: `${__dirname}/../generated/schema.graphql`,
    typegen: `${__dirname}/../generated/types.d.ts`,
  },
});

export default schema;
