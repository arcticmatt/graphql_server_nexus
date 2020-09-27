"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const droid_1 = require("../droid");
const getDroid_1 = require("../../data/getDroid");
const droidQueryField = schema_1.queryField("droid", {
    type: droid_1.default,
    nullable: true,
    args: {
        id: schema_1.stringArg({ description: "id of the droid", nullable: false }),
    },
    // AFAICT, _root and args should be automatically typed by GraphQL Nexus. But something
    // is not working.
    resolve(_root, { id }) {
        return getDroid_1.getDroid(id);
    },
});
exports.default = droidQueryField;
