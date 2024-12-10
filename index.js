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

// console.log(groupPeople);

// Find the average salary for each profession:

function findAverageSalary() {
  let groupPeopleBySalary = people.reduce((result, object) => {
    //   console.log(object);

    if (result[object.profession]) {
      result[object.profession].push(object.salary);
    } else {
      result[object.profession] = [];
      result[object.profession].push(object.salary);
    }

    return result;
  }, {});

  //   console.log(groupPeopleBySalary);

  let averageSalary = {};
  for (const key in groupPeopleBySalary) {
    // console.log(key);
    let length = groupPeopleBySalary[key].length;
    let totalSalary = 0;
    for (let salary = 0; salary < length; salary++) {
      totalSalary += groupPeopleBySalary[key][salary];
    }

    averageSalary[key] = totalSalary / length;
  }

  console.log(averageSalary);
}

// findAverageSalary();

// Write a function that returns the youngest and oldest person in each profession.

function findYoungestAndOldest() {
  let groupPeople = people.reduce((result, object) => {
    if (result[object.profession]) {
      result[object.profession].push(object);
    } else {
      result[object.profession] = [];
      result[object.profession].push(object);
    }

    return result;
  }, {});

  let minAge = {};
  let maxAge = {};

  for (const key in groupPeople) {
    // console.log(key);
    let professionPeople = groupPeople[key];

    let min = 100;
    let max = 0;

    let objMin = {};
    let objMax = {};
    for (const element of professionPeople) {
      if (element.age < min) {
        min = element.age;
        objMin = element;
      }
      if (element.age > max) {
        max = element.age;
        objMax = element;
      }
    }

    minAge[key] = [];
    maxAge[key] = [];

    minAge[key].push(objMin);
    maxAge[key].push(objMax);

    // console.log(professionPeople);
  }
  console.log("min Age", minAge);
  console.log("max AGe", maxAge);

  //   console.log(groupPeople);
}

findYoungestAndOldest();
