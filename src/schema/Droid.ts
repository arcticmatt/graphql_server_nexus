import character from "./character";
import { objectType } from "@nexus/schema";

const droid = objectType({
  name: "Droid",
  description: "A mechanical creature in the Star Wars universe.",
  definition(t) {
    // Don't think I can change the field descriptions, because modify does not exist.
    t.implements(character);
    t.string("primaryFunction", {
      description: "The primary function of the droid.",
      nullable: true,
    });
  },
});

export default droid;
