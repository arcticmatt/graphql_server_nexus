"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const episode_1 = require("./episode");
const getFriends_1 = require("../data/getFriends");
const schema_1 = require("@nexus/schema");
const character = schema_1.interfaceType({
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
            type: character,
            list: [false],
            nullable: true,
            resolve: (character) => {
                return getFriends_1.default(character);
            },
        });
        t.field("appearsIn", {
            description: "Which movies they appear in.",
            type: episode_1.default,
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
exports.default = character;
