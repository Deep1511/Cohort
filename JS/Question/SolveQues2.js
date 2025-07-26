// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.
const teas = {
    name:"Lemon tea",
    type:"Green",
    caffine:"low"
}

// Problem: Access and print the name and type properties of the tea object.
console.log(teas.name);
console.log(teas["type"]);


// Problem: Add a new property origin to the tea object.
teas.origin = "Assam"
console.log(teas);

// Problem: Change the caffeine level of the tea object to "Medium".
teas.caffine ="Medium"

// Problem: Remove the type property from the tea object.
delete teas.caffine

// Problem: Check if the tea object has a property origin.
console.log("origin" in teas);

// Problem: Use a for..in loop to print all properties of the tea object.
for(let key in teas){
    console.log(key + " : "+ teas[key]);
}
// Problem: Create a nested object represnting different types of teas and their properties.
const myTeas = {
    greentea : {
        name : "Green Tea"
    },
    blacktea : {
        name : "Black Tea"
    }
}

// Problem : create a copy of the tea object
const teaCopy = { ...myTeas}

// Problem : Add a custom method describe to the tea object that returns a description string
teas.describe = function() {
    return `${this.name} is a ${this.type} tea with ${this.caffine} caffeine.`;
};
// Prbolem : Merge two object representing different 
const teaDetails = {
  name: "Lemon tea",
  type: "Green"
};

const nutritionInfo = {
  caffeine: "low",
  calories: 5
}

const mergedTea = { ...teaDetails, ...nutritionInfo };

console.log(mergedTea);
