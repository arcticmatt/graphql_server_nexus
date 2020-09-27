"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const HumanOrDroid_1 = require("../HumanOrDroid");
const SumInput_1 = require("../SumInput");
const StarWarsData_1 = require("../../StarWarsData");
const humanOrDroidQueryField = schema_1.queryField("humanOrDroid", {
    type: HumanOrDroid_1.default,
    nullable: true,
    args: {
        input: schema_1.arg({ type: SumInput_1.default, nullable: false }),
    },
    resolve(_root, args) {
        return StarWarsData_1.getHumanOrDroid(args.input);
    },
});
exports.default = humanOrDroidQueryField;
