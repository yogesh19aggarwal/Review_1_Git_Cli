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

findAverageSalary();
