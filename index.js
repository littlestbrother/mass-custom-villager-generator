// VILLAGER
// const example = {
//   VillagerData: { profession: farmer, level: 2, type: plains },
//   Invulnerable: 1,
//   PersistenceRequired: 1,
//   CustomName: '"Test"',
//   Offers: {
//     Recipes: [
//       {
//         buy: { id: emerald, Count: 5 },
//         sell: { id: diamond, Count: 1 },
//         xp: 10,
//         maxUses: 9999999,
//       },
//     ],
//   },
// };

// DIRTY = CLEAN
// const fs = require("fs");
// const dirty = require("./dirty-item-groups.json");
// let clean = [];
// for (const e of dirty) {
//   const name = e.name.split("(").pop().split(")")[0];
//   const category = e.category;
//   const stack_count = e.stack_count;
//   clean.push({ name, category, stack_count });
// }
// fs.writeFileSync("clean-item-groups.json", JSON.stringify(clean));

// FILTER
// const fs = require("fs");
// const unfiltered = require("./clean-item-groups.json");
// let cnt = 0;
// let filtered = {};
// for (const e of unfiltered) {
//   cnt++;
//   if (!filtered[e.category]) {
//     filtered[e.category] = {};
//   }
//   filtered[e.category][e.name] = {
//     category: e.category,
//     stack_count: e.stack_count,
//   };
// }
// console.log("items parsed:", cnt);
// fs.writeFileSync("filtered-item-groups.json", JSON.stringify(filtered));

// CHECK
// const items = require("./filtered-item-groups.json");
// let i = 0;
// for (const k in items) {
//   if (Object.hasOwnProperty.call(items, k)) {
//     const e = items[k];
//     const categoryItemCount = Object.entries(e).length;
//     console.log(categoryItemCount);
//     console.log(e);
//     i += categoryItemCount;
//   }
// }
// console.log(i);
