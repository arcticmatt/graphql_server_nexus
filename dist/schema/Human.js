"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("./character");
const schema_1 = require("@nexus/schema");
const human = schema_1.objectType({
    name: "Human",
    description: "A humanoid creature in the Star Wars universe.",
    definition(t) {
        // Don't think I can change the field descriptions, because modify does not exist.
        t.implements(character_1.default);
        t.string("homePlanet", {
            description: "The home planet of the human, or null if unknown",
            nullable: true,
        });
    },
});
exports.default = human;
