import episode from "./episode";
import getFriends from "../data/getFriends";
import { interfaceType } from "@nexus/schema";

const character = interfaceType({
  name: "Character",
  description: "A character in the Star Wars Trilogy",
  definition(t) {
    t.string("id", { description: "The id of the character." });
    t.string("name", {
      description: "The name of the character.",
      nullable: true,
    });
    t.field("friends", {
      description:
        "The friends of the character, or an empty list if they have none.",
      type: character,
      list: [false],
      nullable: true,
      resolve: (character) => {
        return getFriends(character);
      },
    });
    t.field("appearsIn", {
      description: "Which movies they appear in.",
      type: episode,
      list: [false],
      nullable: true,
    });
    t.string("secretBackstory", {
      description: "All secrets about their past.",
      nullable: true,
      resolve: () => {
        throw new Error("secretBackstory is secret");
      },
    });
    t.resolveType((character) => character.type);
  },
});

export default character;
