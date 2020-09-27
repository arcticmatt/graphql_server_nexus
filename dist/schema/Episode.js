"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const episode = schema_1.enumType({
    name: "Episode",
    description: "One of the films in the Star Wars Trilogy",
    members: [
        {
            name: "NEW_HOPE",
            value: 4,
            description: "Released in 1977.",
        },
        {
            name: "EMPIRE",
            value: 5,
            description: "Released in 1980.",
        },
        {
            name: "JEDI",
            value: 6,
            description: "Released in 1983.",
        },
    ],
});
exports.default = episode;
