"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Droid_1 = require("./Droid");
const Human_1 = require("./Human");
const schema_1 = require("@nexus/schema");
const HumanOrDroid = schema_1.unionType({
    name: "HumanOrDroid",
    definition(t) {
        t.members(Human_1.default, Droid_1.default);
        t.resolveType((character) => character.type);
    },
});
exports.default = HumanOrDroid;
