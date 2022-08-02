const items = require("items");

const baseUnitPrice = 1; // the lowest possible price to buy anything
const currency = "emerald"; // what villagers will accept as currency

// boilerplate for VillagerData
const example = {
  VillagerData: { profession: farmer, level: 2, type: plains },
  Invulnerable: 1,
  PersistenceRequired: 1,
  CustomName: '"Test"',
  Offers: {
    Recipes: [
      // {
      //   buy: { id: emerald, Count: 5 },
      //   sell: { id: diamond, Count: 1 },
      //   xp: 10,
      //   maxUses: 9999999,
      // },
    ],
  },
};

// CLI or website to define prices? (probably a website)
// serve categories to user, prompting an item price and a resulting count
// skip items which have not been specified to be sold at a specific price
// add search functionality?
// make currency default, but can be changed for specific items?
// lots of ideas!