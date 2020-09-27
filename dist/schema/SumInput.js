"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const SumInput = schema_1.inputObjectType({
    name: "SumInput",
    definition(t) {
        t.int("one", { description: "An arbitrary integer." });
        t.int("two", { description: "An arbitrary integer." });
        t.int("three", { description: "An arbitrary integer." });
    },
});
exports.default = SumInput;
