"use strict";
let result = document.querySelector(".result");
let form = document.querySelector(".my-form");
let submission = document.querySelector(".submission");
submission.addEventListener("click", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  //console.log(data);
  //result.textContent = data.get("name");
  let card = document.createElement("div");
  card.classList.add("card");
  let title = document.createElement("p");
  let name = data.get("name");
  title.textContent = name;
  let age = data.get("age");
  let ageResult = document.createElement("p");
  ageResult.textContent = ageResult;
  let desc = data.get("des");
  let detail = document.createElement("p");
  detail.textContent = desc;
  card.append(title);
  card.append(age);
  card.append(detail);
  result.append(card);
});
//Create a add function
//Parameters
//Number x
//Number y
//Add x + y
//Return result
const add = (x, y) => {
  return x + y;
};

//Create a canDrink function
//Parameters
//Number age
//If age is at least 21, return true
//If age is less than 21, return false

const canDrink = (number) => {
  if (number >= 21) {
    return true;
  } else {
    return false;
  }
};
//Create a fToC function
//Parameters
//Number F
//First do result = F-32
//Then do result = result /1.8
//Return result
//Create cToF function
//Parameters
//Number F
//First do result = F*1.8
//Then do result = result +32
//Return result
const fToC = (number, unit) => {
  if (unit == `F`) {
    let result = (number - 32) / 1.8;
    return result;
  } else {
    let result = number * 1.8 + 32;
  }
};

//Create addAll function
//Parameters
//Number array numbers
//Add all numbers in array
//Return result
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const addAll = (array) => {
  for (let i = 0; i <= array.length; i++) {
    let total = total + array[i];
  }
  return total;
};

//Create firstHundred function
//Parameters
//Number array numbers
//Go through array until you find first value greater than or equal to 100
//Return result, or return 0 if nothing is found
let arrayOfNumber = [29, 34, 56, 343, 12, 453];
const firstHudred = (array) => {
  let i = 0;
  while (true) {
    if (array[i] >= 100) {
      return array[i];
      break;
    } else {
      i++;
    }
  }
};

//Create youngestStudent function
//Create a student class/template
//Parameters
//Object array students
//Create a starting point
//Usually an new object equal to the 0 index of the array
//Foreach loop the array
//If the student is younger than the starting point then replace starting point, replace starting point
//Once done, return starting point

let students = [
  { name: "Pallavi", age: 48 },
  { name: "Amruta", age: 17 },
  { name: "Atharva", age: 21 },
  { name: "Sandeep", age: 50 },
];
const youngestStudent = (studentArray) => {
  let startingPoint = studentArray[0];

  studentArray.forEach((item) => {
    if (startingPoint.age >= item.age) {
      startingPoint.age = item.age;
    }
  });
  return startingPoint;
};
console.log(youngestStudent(students));
