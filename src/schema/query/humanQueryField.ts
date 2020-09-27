import { queryField, stringArg } from "@nexus/schema";

import getHuman from "../../data/getHuman";
import human from "../human";

const humanQueryField = queryField("human", {
  type: human,
  nullable: true,
  args: {
    id: stringArg({ description: "id of the human", nullable: false }),
  },
  resolve(_root: unknown, { id }: { id: string }) {
    return getHuman(id);
  },
});

export default humanQueryField;
