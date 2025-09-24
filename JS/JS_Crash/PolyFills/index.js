if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(cb){
        for(let i=0;i<this.length;i++){
            cb(this[i],i)
        }
    }
}

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(cb){
        const result = [];
        for(let i=0;i<this.length;i++){
            const value = cb(this[i],i);
            result.push(value);
        }
        return result;
    }    
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue) {
    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }

    let acc;
    let startIndex;

    if (arguments.length > 1) {   // initialValue is provided
      acc = initialValue;
      startIndex = 0;
    } else {
      if (this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      acc = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
    }

    return acc;
  };
}

const arr = [1,2,3,4,5]
arr.myForEach((value,index)=>{console.log(`At index: ${index} value: ${value}`);
})

const sum = arr.reduce((previousValue,currentValue) => currentValue+previousValue,12)
console.log("Sum",sum)
const trippledArr = arr.myMap((e)=>(e*3))
console.log(trippledArr);
