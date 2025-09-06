function greet(name){
    console.log(`Hello ${name}`);
    
}

// greet("Deep")
// greet("Prem")

let globalVar = "I am global"

function modifyGlobal(){
    globalVar = "I am modified"
    let blockScopedVar = "I an blocked scoped"
    console.log(blockScopedVar);
    
}

// console.log(globalVar);


// modifyGlobal()

let config = function(){
    let settings = {
        theme : "dark"
    }
    return settings
}()

// (()=>{}) ifee

// let person1 = {
//     name: "ravi",
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// let person2 = {
//     name : "hitesh"
// }

// person1.greet.call(person2)
// const bindGreet = person1.greet.bind(person2)

// console.log(bindGreet("Hii"))

// bindGreet()

let person1 = {
    personName: "Deep",
    greet: function(){
        console.log(`Hello, ${this.personName}`);
        
    }
}

let person3 = {
    personName: "Mahi"
}

person1.greet.call({personName:"Mahi"})