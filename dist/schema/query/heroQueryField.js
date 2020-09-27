"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const Character_1 = require("../Character");
const Episode_1 = require("../Episode");
const StarWarsData_1 = require("../../StarWarsData");
const heroQueryField = schema_1.queryField("hero", {
    type: Character_1.default,
    nullable: true,
    args: {
        episode: schema_1.arg({
            type: Episode_1.default,
            description: "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
        }),
    },
    resolve(_root, args) {
        return StarWarsData_1.getHero(args.episode);
    },
});
exports.default = heroQueryField;
