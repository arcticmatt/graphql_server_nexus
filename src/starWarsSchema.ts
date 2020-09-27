import {
  arg,
  enumType,
  inputObjectType,
  interfaceType,
  makeSchema,
  objectType,
  queryType,
  stringArg,
  unionType,
} from "@nexus/schema";
import {
  getDroid,
  getFriends,
  getHero,
  getHuman,
  getHumanOrDroid,
} from "./StarWarsData";

const Episode = enumType({
  name: "Episode",
  description: "One of the films in the Star Wars Trilogy",
  members: [
    {
      name: "NEW_HOPE",
      value: 4,
      description: "Released in 1977.",
    },
    {
      name: "EMPIRE",
      value: 5,
      description: "Released in 1980.",
    },
    {
      name: "JEDI",
      value: 6,
      description: "Released in 1983.",
    },
  ],
});

const Character = interfaceType({
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
      type: Character,
      list: [false],
      nullable: true,
      resolve: (character) => {
        return getFriends(character);
      },
    });
    t.field("appearsIn", {
      description: "Which movies they appear in.",
      type: Episode,
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

const Human = objectType({
  name: "Human",
  description: "A humanoid creature in the Star Wars universe.",
  definition(t) {
    // Don't think I can change the field descriptions, because modify does not exist.
    t.implements(Character);
    t.string("homePlanet", {
      description: "The home planet of the human, or null if unknown",
      nullable: true,
    });
  },
});

const Droid = objectType({
  name: "Droid",
  description: "A mechanical creature in the Star Wars universe.",
  definition(t) {
    // Don't think I can change the field descriptions, because modify does not exist.
    t.implements(Character);
    t.string("primaryFunction", {
      description: "The primary function of the droid.",
      nullable: true,
    });
  },
});

const SumInput = inputObjectType({
  name: "SumInput",
  definition(t) {
    t.int("one", { description: "An arbitrary integer." });
    t.int("two", { description: "An arbitrary integer." });
    t.int("three", { description: "An arbitrary integer." });
  },
});

const HumanOrDroid = unionType({
  name: "HumanOrDroid",
  definition(t) {
    t.members(Human, Droid);
    t.resolveType((character) => character.type);
  },
});

const Query = queryType({
  definition(t) {
    t.field("hero", {
      type: Character,
      nullable: true,
      args: {
        episode: arg({
          type: Episode,
          description:
            "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
        }),
      },
      resolve(_root, args) {
        return getHero(args.episode);
      },
    });
    t.field("human", {
      type: Human,
      nullable: true,
      args: {
        id: stringArg({ description: "id of the human", nullable: false }),
      },
      resolve(_root, args) {
        return getHuman(args.id);
      },
    });
    t.field("droid", {
      type: Droid,
      nullable: true,
      args: {
        id: stringArg({ description: "id of the droid", nullable: false }),
      },
      resolve(_root, args) {
        return getDroid(args.id);
      },
    });
    t.field("humanOrDroid", {
      type: HumanOrDroid,
      nullable: true,
      args: {
        input: arg({ type: SumInput, nullable: false }),
      },
      resolve(_root, args) {
        return getHumanOrDroid(args.input);
      },
    });
  },
});

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: `${__dirname}/../generated/schema.graphql`,
    typegen: `${__dirname}/../generated/types.d.ts`,
  },
});

export default schema;
