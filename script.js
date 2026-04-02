var a;
console.log(a); //?undefined.

//?Primitive Datatype (immutable) ==> Always use let.
//?Non-Primitive Datatype (mutable) ==> Always Use const.

let b;
console.log(b); //? undefined.

var s = 10; //global
let d = 20; // script - tdz
const c = 30; // script - tdz

// conditional / loops
console.log(x); //undefined
if (100 > 2) {
  var x = 10; // global ==> global scope
  let y = 20; // local ==> block scope
  const z = 30; // local ==> block scope
}

console.log(x); //10

let y;
console.log(y); //undefined

// functions
function demo() {
  var m = 10; //local variable ==> local / function scope
  let n = 20; //local variable ==> local / function scope
  const o = 30; //local variable ==> local / function scope
}

// Arrays

const arr1 = [10, 20, 30, 40];

for (let i = 0; i < arr1.length; i++) {
  console.log("index", i);
  console.log("element", arr1[i]);
}

//? for of ==> values
for (let i of arr1) {
  console.log(i);
}

// ? for in ==> indexes
for (let i in arr1) {
  console.log(i);
}

// ? forEach and map diff
const arr2 = [100, 200, 300, 400];

let v1 = arr2.forEach((element, index, array) => {
  console.log(element, index, array);
  return element + 5;
});

console.log("forEach ==>", v1);

let v2 = arr2.map((element, index, array) => {
  console.log(element, index, array);
  return element + 5;
});

console.log("map ==>", v2);

// filter ==> filtering out some values based on some given conditions
let v3 = arr2.filter((ele) => ele > 250);

console.log(v3);

// find ==> find method returns us a single value which will be matched.
let v4 = arr2.find((ele) => ele > 250);
