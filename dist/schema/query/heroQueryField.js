"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const character_1 = require("../character");
const episode_1 = require("../episode");
const getHero_1 = require("../../data/getHero");
const heroQueryField = schema_1.queryField("hero", {
    type: character_1.default,
    nullable: true,
    args: {
        episode: schema_1.arg({
            type: episode_1.default,
            description: "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
        }),
    },
    resolve(_root, { episode }) {
        return getHero_1.default(episode);
    },
});
exports.default = heroQueryField;
