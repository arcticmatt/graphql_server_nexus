"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const droid_1 = require("./droid");
const human_1 = require("./human");
const schema_1 = require("@nexus/schema");
const humanOrDroid = schema_1.unionType({
    name: "HumanOrDroid",
    definition(t) {
        t.members(human_1.default, droid_1.default);
        t.resolveType((character) => character.type);
    },
});
exports.default = humanOrDroid;
