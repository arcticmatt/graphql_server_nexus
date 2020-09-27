"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query = require("./query/Query");
const schema_1 = require("@nexus/schema");
const schema = schema_1.makeSchema({
    types: [Query],
    outputs: {
        schema: `${__dirname}/../generated/schema.graphql`,
        typegen: `${__dirname}/../generated/types.d.ts`,
    },
});
exports.default = schema;
