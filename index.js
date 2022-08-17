const items = require("./items.json");

const currency = "amethyst_cluster"; // what villagers will accept as currency
const profession = 'fletcher';
const type = 'taiga'

// boilerplate for VillagerData
const newCommand = (category) => {
  return {
    VillagerData: { profession, level: 5, type },
    Invulnerable: 1,
    PersistenceRequired: 1,
    CustomName: "\"" + category + "\"",
    Offers: {
      Recipes: [

      ],
    },
  }
}

const newRecipe = (currency, { name, price, count }) => {
  return {
    buy: { id: currency, Count: price },
    sell: { id: name, Count: count },
    maxUses: 9999999,
  }
}

for (const k in items) {
  if (Object.hasOwnProperty.call(items, k)) {
    const element = items[k];

    // create basic command template
    const command = newCommand(k)

    for (const e of element) {
      command.Offers.Recipes.push(newRecipe(currency, { ...e }));
    }
    console.log("💠 summon minecraft:villager ~ ~1 ~ ",JSON.stringify(command).replace(/\s/g, '', `\n\n`))
  }
}