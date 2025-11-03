Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
    
}

function greet(name){
    return `Hello ${name}`
}

greet.describe("deep");

//function declaration
function add(a,b){
    return a+b;
}

//function expression
const substrac = function(a,b){
    return a-b;
}

//Arrow function
const multiply = (a,b) => a*b;


function applyOperation(a,b,operation){
    return operation(a,b);
}

//first class function
const result = applyOperation(5,4, (x,y)=>x/y)


function createCounter(){
    let count  = 0;
    return function(){
        count++;
        return count;
    }
}

function oneF(){
    let myName = "deep";
}

// console.log(myName);

(function(){
    console.log("hitesh");
    
})()

// ()()
