"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Episode_1 = require("./Episode");
const StarWarsData_1 = require("../StarWarsData");
const schema_1 = require("@nexus/schema");
const Character = schema_1.interfaceType({
    name: "Character",
    description: "A character in the Star Wars Trilogy",
    definition(t) {
        t.string("id", { description: "The id of the character." });
        t.string("name", {
            description: "The name of the character.",
            nullable: true,
        });
        t.field("friends", {
            description: "The friends of the character, or an empty list if they have none.",
            type: Character,
            list: [false],
            nullable: true,
            resolve: (character) => {
                return StarWarsData_1.getFriends(character);
            },
        });
        t.field("appearsIn", {
            description: "Which movies they appear in.",
            type: Episode_1.default,
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
exports.default = Character;
