import { arg, queryField } from "@nexus/schema";

import { SumInput } from "../../data/types/SumInput";
import { getHumanOrDroid } from "../../data/getHumanOrDroid";
import humanOrDroid from "../humanOrDroid";
import sumInput from "../sumInput";

const humanOrDroidQueryField = queryField("humanOrDroid", {
  type: humanOrDroid,
  nullable: true,
  args: {
    input: arg({ type: sumInput, nullable: false }),
  },
  resolve(_root: unknown, { input }: { input: SumInput }) {
    return getHumanOrDroid(input);
  },
});

export default humanOrDroidQueryField;
