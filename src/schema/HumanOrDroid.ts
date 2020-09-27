import Droid from "./Droid";
import Human from "./Human";
import { unionType } from "@nexus/schema";

const HumanOrDroid = unionType({
  name: "HumanOrDroid",
  definition(t) {
    t.members(Human, Droid);
    t.resolveType((character) => character.type);
  },
});

export default HumanOrDroid;
