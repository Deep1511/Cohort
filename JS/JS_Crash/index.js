const obj = {
  personName: "Deep",
  greet: function () {
    console.log(`Hello, ${this.personName}`);
  },
};

// console.log("Hello From Js");

const a = 2;
const b = 3;

// console.log("SUM", a + b);

// setTimeout(()=>{
//     console.log("I am delayed");
// },10*1000) //Minimum 10sec wait karo

// setTimeout(obj.greet,2*1000)
// console.log("Bye Bye")

// while(true){
//     console.log("I am inside loop");

// }

const objNew = {
  personName: "Mahi",
  greet: function () {
    console.log(`Hello, ${this.personName}`);
  },
};

// console.log("Hi");

// setTimeout(obj.greet.bind(obj),5*1000)

// console.log("Bye");

console.log("Hi");

// setTimeout(() => console.log('Hello after 2 sec'),2*1000)

setTimeout(() => console.log("Hello after 2s"), 0);

Promise.resolve().then(() => {
  console.log("Promise Resolved");
});

// setTimeout(() => console.log('Hello after 2s'),0)
console.log("Bye");

console.log("hi");

Promise.resolve().then(() => {
  console.log("1. Promise Resolved");

  Promise.resolve().then(() => {
    console.log("2. Promise Resolved");

    Promise.resolve().then(() => {
      console.log("3. Promise Resolved");
    });
  });
});
console.log("bye");
