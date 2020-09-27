import { arg, queryField } from "@nexus/schema";

import character from "../character";
import episode from "../episode";
import getHero from "../../data/getHero";

const heroQueryField = queryField("hero", {
  type: character,
  nullable: true,
  args: {
    episode: arg({
      type: episode,
      description:
        "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
    }),
  },
  resolve(_root: unknown, { episode }: { episode?: number }) {
    return getHero(episode);
  },
});

export default heroQueryField;
