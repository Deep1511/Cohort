let myArray = [1,4,3,5,2,6]

function sumFac(numbers){
    let sum = 0;
    for(let i =0;i<numbers.length;i++){
        sum = sum+numbers[i];
    }
    return sum;
}

let arraySum = sumFac(myArray);
console.log(arraySum);
