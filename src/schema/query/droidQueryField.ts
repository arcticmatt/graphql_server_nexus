import { queryField, stringArg } from "@nexus/schema";

import Droid from "../Droid";
import { getDroid } from "../../data/getDroid";

const droidQueryField = queryField("droid", {
  type: Droid,
  nullable: true,
  args: {
    id: stringArg({ description: "id of the droid", nullable: false }),
  },
  resolve(_root, args) {
    return getDroid(args.id);
  },
});

export default droidQueryField;
