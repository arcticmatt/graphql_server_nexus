"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("./character");
const schema_1 = require("@nexus/schema");
const droid = schema_1.objectType({
    name: "Droid",
    description: "A mechanical creature in the Star Wars universe.",
    definition(t) {
        // Don't think I can change the field descriptions, because modify does not exist.
        t.implements(character_1.default);
        t.string("primaryFunction", {
            description: "The primary function of the droid.",
            nullable: true,
        });
    },
});
exports.default = droid;
