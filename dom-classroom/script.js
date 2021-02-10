"use strict";
let students = [
  {
    name: "Pallavi",
    grade: 10,
  },
  { name: "Justin", grade: 12 },
  {
    name: "Mitch",
    grade: 7,
  },
];

let myForm = document.querySelector(".my-form");
let submitBtn = document.querySelector(".submit");
let displayContainer = document.querySelector(".display-container");
let displayBtn = document.querySelector(".display");

displayBtn.addEventListener("click", () => {
  students.forEach((item) => {
    if (item.grade >= 10) {
      let name = document.createElement("p");
      let grade = document.createElement("p");
      name.textContent = item.name;
      grade.textContent = item.grade;
      displayContainer.append(name);
      displayContainer.append(grade);
    }
  });
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let snapShot = new FormData(myForm);
  let newName = snapShot.get("name");
  let newgrade = snapShot.get("grade");
  let newStudent = { name: newName, grade: newgrade };
  students.push(newStudent);
});
