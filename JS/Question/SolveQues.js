// Problem: Create an array containing different types of teas
const teas = ["Green tea","Black tea","oolong tea","white tea","Herbal tea"];
console.log(teas);

// Problem : Add "Chamolie Tea" to the existing list of teas
teas.push("Chamomile Tea");
//Problem : Remove "Oolong Tea" from the list of teas
const index = teas.indexOf("oolong tea");
if(index >-1){
    teas.splice(index,1);
}

// Problem : Filter the list to only includes teas that are caffeinated
let caffinatedTeas= teas.filter((tea)=> tea!="Herbal tea");

// Problem : Sort the list of teas in alphabetical order.
const sortedArray = teas.sort();
console.log(sortedArray);

// Problem : Use a for loop to print each type of tea in the array.
for(let i =0;i<teas.length;i++){
    console.log(teas[i]);
} 

// Problem : Use a for loop to count how many teas are ceffeinated(excluding "Herbal Tea")
let caffinatedMyTeas =0;
for(let i=0;i<teas.length;i++){
    if(teas[i]!=="Herbal tea"){
        caffinatedMyTeas++;
    }
}
console.log(caffinatedMyTeas);

// Problem : Use a for loop to create a new array with all tea name in uppercase
let uppercaseTeas =[];
for(let i =0;i<teas.length;i++){
    uppercaseTeas.push(teas[i].toUpperCase())
}
console.log(uppercaseTeas);

// Problem : Use a for loop to find the tea name with the most character
let longestTea = "";
for(let i =0;i<teas.length;i++){
    if(teas[i].length > longestTea){
        longestTea = teas[i];
    }
}
console.log(longestTea);


// Problem: use a for loop to reverse the order of teas in the array
const reversedArray = [];
for(let i =teas.length-1;i>=0;i--){
    reversedArray.push(teas[i]);
}
console.log(reversedArray);
