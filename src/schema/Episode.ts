import { enumType } from "@nexus/schema";

const Episode = enumType({
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

export default Episode;
