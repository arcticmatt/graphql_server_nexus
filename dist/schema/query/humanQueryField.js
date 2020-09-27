"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const getHuman_1 = require("../../data/getHuman");
const human_1 = require("../human");
const humanQueryField = schema_1.queryField("human", {
    type: human_1.default,
    nullable: true,
    args: {
        id: schema_1.stringArg({ description: "id of the human", nullable: false }),
    },
    resolve(_root, { id }) {
        return getHuman_1.default(id);
    },
});
exports.default = humanQueryField;
