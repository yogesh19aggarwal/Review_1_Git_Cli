import { people } from "./people1.js";

let ageAbove30 = people.filter((object) => {
  if (object.age > 30) {
    return object;
  }
});

console.log(ageAbove30);
