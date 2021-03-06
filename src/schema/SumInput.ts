import { inputObjectType } from "@nexus/schema";

const sumInput = inputObjectType({
  name: "SumInput",
  definition(t) {
    t.int("one", { description: "An arbitrary integer." });
    t.int("two", { description: "An arbitrary integer." });
    t.int("three", { description: "An arbitrary integer." });
  },
});

export default sumInput;
