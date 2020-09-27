import droid from "./droid";
import human from "./human";
import { unionType } from "@nexus/schema";

const humanOrDroid = unionType({
  name: "HumanOrDroid",
  definition(t) {
    t.members(human, droid);
    t.resolveType((character) => character.type);
  },
});

export default humanOrDroid;
