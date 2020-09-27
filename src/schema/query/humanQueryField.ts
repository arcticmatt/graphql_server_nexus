import { queryField, stringArg } from "@nexus/schema";

import Human from "../Human";
import getHuman from "../../data/getHuman";

const humanQueryField = queryField("human", {
  type: Human,
  nullable: true,
  args: {
    id: stringArg({ description: "id of the human", nullable: false }),
  },
  resolve(_root, args) {
    return getHuman(args.id);
  },
});

export default humanQueryField;
