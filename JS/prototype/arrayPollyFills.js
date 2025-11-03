const arr = [1,2,3,4,5,6];

// Error : .forEach function does not exist on arr variable

// Real signature ko samjo - no return, function input,value,index
// calls my fn for every value
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this //Current object ki taraf point karta hai

        for(let i = 0;i<originalArr.length;i++){
            userFn(originalArr[i],i);
        }
    }
}


// Signature Map
// Return - new array, each element iterate
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = [];
        for(let  i =0;i< this.length;i++){
            const value = userFn(this[i],i)
            result.push(value);
        }
        return result;
    }
}
const ret = arr.myForEach(function(value,index){
    console.log(`Value at index ${index} is ${value}`);
})

console.log(`Ret is ${ret}`);

const n2 = arr.myMap((e) => e *3)
console.log(n2);


// Filter
// Signature: Return - new array | input : userFn
// agar user fn true return karta hai to current value ko new array mai include karta hai
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (userFn){
        const result = [];
        for(let i = 0;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }
        return result;
    }
}
const n3 = arr.myFilter((e)=> e%2 == 0)
console.log(n3);

