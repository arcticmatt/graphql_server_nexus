import character from "./character";
import { objectType } from "@nexus/schema";

const human = objectType({
  name: "Human",
  description: "A humanoid creature in the Star Wars universe.",
  definition(t) {
    // Don't think I can change the field descriptions, because modify does not exist.
    t.implements(character);
    t.string("homePlanet", {
      description: "The home planet of the human, or null if unknown",
      nullable: true,
    });
  },
});

export default human;
