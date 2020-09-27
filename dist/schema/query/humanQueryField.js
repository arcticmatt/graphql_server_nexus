"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const Human_1 = require("../Human");
const StarWarsData_1 = require("../../StarWarsData");
const humanQueryField = schema_1.queryField("human", {
    type: Human_1.default,
    nullable: true,
    args: {
        id: schema_1.stringArg({ description: "id of the human", nullable: false }),
    },
    resolve(_root, args) {
        return StarWarsData_1.getHuman(args.id);
    },
});
exports.default = humanQueryField;
