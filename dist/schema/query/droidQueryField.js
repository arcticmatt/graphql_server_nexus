"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const Droid_1 = require("../Droid");
const StarWarsData_1 = require("../../StarWarsData");
const droidQueryField = schema_1.queryField("droid", {
    type: Droid_1.default,
    nullable: true,
    args: {
        id: schema_1.stringArg({ description: "id of the droid", nullable: false }),
    },
    resolve(_root, args) {
        return StarWarsData_1.getDroid(args.id);
    },
});
exports.default = droidQueryField;
