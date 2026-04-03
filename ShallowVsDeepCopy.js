import loadash from "lodash";
// shallow copy v/s deep copy

// Both obj1 and obj2 is pointing to the same object reference.
// let obj1 = {
//   name: "John Cena",
//   city: "Delhi",
// };

// let obj2 = obj1;

// obj2.city = "Noida";
// console.log(obj1);
// console.log(obj2);

//? Example of the shallow copy
// let obj1 = {
//   name: "John Cena",
//   city: "Delhi",
// };

// //~ way 1 => performing shallow copy with the help of spread operator.
// //let obj2 = { ...obj1 };

// //~ way 2 => shallow copy using Object.assign()
// let obj2 = Object.assign({}, obj1);

// obj2.city = "Noida";
// console.log(obj1);
// console.log(obj2);

//? Example of deep copy

let obj1 = {
  name: "John Cena",
  age: 22,
  greet: function () {},
  address: {
    city: "Delhi",
    pin: 987065,
  },
};

// let obj2 = { ...obj1 };//? shallow copy

// way 01 => using JSON.stringify()
//let obj2 = JSON.parse(JSON.stringify(obj1));
// with stringify, js object converted into string and i.e json and it's reference changed and again we converted it into object,so overall reference changed,and then we parsed json again into an object.Problem with it is that if we write a function inside object, then it is not copied properly

// way 02 => Using third party library lodash
let obj2 = loadash.cloneDeep(obj1);

// JSON
// console.log(obj1);

// let jsonData = JSON.stringify(obj1);
// console.log(jsonData);
// console.log(typeof obj1);
// console.log(typeof jsonData);

// let jsObject = JSON.parse(jsonData);
// console.log(jsObject);

obj2.address.city = "Noida";
console.log(obj1);
console.log(obj2);
