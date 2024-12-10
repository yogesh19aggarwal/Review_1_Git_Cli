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

// findYoungestAndOldest();

function map(cb, arr) {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    result.push(cb(arr[index]));
  }

  return result;
}

let arr = [1, 2, 3, 4, 5];

let arrResult = map((value) => {
  return value + 5;
}, arr);

// console.log(arrResult);

// Find all lawyers aged below 35 with a salary above 80,000 and sort them by age.

function lawersAbove35() {
  let lawyerObj = people
    .reduce((accu, obj) => {
      if (obj.profession === "Lawyer" && obj.age < 35 && obj.salary > 80000) {
        accu.push(obj);
      }

      return accu;
    }, [])
    .sort((obj1, obj2) => {
      return obj1.age - obj2.age;
    });

  console.log(lawyerObj);
}

// lawersAbove35();

const items = [
  {
    item: "mouse pad",
    price: "$30",
    category: "electronics",
  },
  {
    item: "tshirt",
    price: "$38",
    category: "apparel",
  },
  {
    item: "table",
    price: "$321",
    category: "furniture",
  },
  {
    item: "keyboard",
    price: "$300",
    category: "electronics",
  },
  {
    item: "charging cable",
    price: "$90.5",
    category: "electronics",
  },
  {
    item: "adapter",
    price: "$100.5",
    category: "electronics",
  },
];
//filter electronics below $100.5, use only reduce and give output like this "the items less than $100.5 are 1. mouse pad 2. adapter ..."

let electronics = items.reduce((accu, obj) => {
  let str = Number(obj.price.substring(1));
  //   console.log(str);\
  if (str < 100.5) {
    let length = accu.length;
    accu.push(`${length + 1}. ${obj.item}`);
  }

  return accu;
}, []);

// console.log(electronics);

let user = { name: "John", age: 25, location: "USA" };
// output: My name is John. My age is 25. My location is USA
// use destructuring

function str() {
  const { name, age, location } = user;
  let output = `My name is ${name}. My age is ${age}. My location is ${location}`;

  return output;
}

console.log(str());
