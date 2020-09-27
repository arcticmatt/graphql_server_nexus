import { queryField, stringArg } from "@nexus/schema";

import droid from "../droid";
import { getDroid } from "../../data/getDroid";

const droidQueryField = queryField("droid", {
  type: droid,
  nullable: true,
  args: {
    id: stringArg({ description: "id of the droid", nullable: false }),
  },
  // AFAICT, _root and args should be automatically typed by GraphQL Nexus. But something
  // is not working.
  resolve(_root: unknown, { id }: { id: string }) {
    return getDroid(id);
  },
});

export default droidQueryField;
