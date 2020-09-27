import { arg, queryField } from "@nexus/schema";

import Character from "../Character";
import Episode from "../Episode";
import getHero from "../../data/getHero";

const heroQueryField = queryField("hero", {
  type: Character,
  nullable: true,
  args: {
    episode: arg({
      type: Episode,
      description:
        "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
    }),
  },
  resolve(_root, args) {
    return getHero(args.episode);
  },
});

export default heroQueryField;
