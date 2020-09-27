import { arg, queryField } from "@nexus/schema";

import HumanOrDroid from "../HumanOrDroid";
import SumInput from "../SumInput";
import { getHumanOrDroid } from "../../data/getHumanOrDroid";

const humanOrDroidQueryField = queryField("humanOrDroid", {
  type: HumanOrDroid,
  nullable: true,
  args: {
    input: arg({ type: SumInput, nullable: false }),
  },
  resolve(_root, args) {
    return getHumanOrDroid(args.input);
  },
});

export default humanOrDroidQueryField;
