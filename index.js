import { people } from "./people1.js";

let ageAbove30 = people.filter((object) => {
  if (object.age > 30) {
    return object;
  }
});

// console.log(ageAbove30);

let groupPeople = people.reduce((result, object) => {
  //   console.log(object);

  if (result[object.profession]) {
    result[object.profession].push(object.name);
  } else {
    result[object.profession] = [];
    result[object.profession].push(object.name);
  }

  return result;
}, {});

console.log(groupPeople);
