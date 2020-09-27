"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const getHumanOrDroid_1 = require("../../data/getHumanOrDroid");
const humanOrDroid_1 = require("../humanOrDroid");
const sumInput_1 = require("../sumInput");
const humanOrDroidQueryField = schema_1.queryField("humanOrDroid", {
    type: humanOrDroid_1.default,
    nullable: true,
    args: {
        input: schema_1.arg({ type: sumInput_1.default, nullable: false }),
    },
    resolve(_root, { input }) {
        return getHumanOrDroid_1.getHumanOrDroid(input);
    },
});
exports.default = humanOrDroidQueryField;
