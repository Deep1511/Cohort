let chaiType = ["Masala Chai","Ginger Chai","Green Tea","Lemon Tea"]

console.log(chaiType[2]);

console.log(`Total chai Types: ${chaiType.length}`);

chaiType.push("Herbal Tea")
const data = chaiType.pop()// data == "Herbal Tea"

let index = chaiType.indexOf("Green Tea")//2
console.log(index);

if(index !== -1){
    chaiType.splice(index,1)
}

console.log(chaiType)

chaiType.forEach((chai,index)=>{
    console.log(`${index+1}: ${chai}`);
    
})

let moreChaiTypes = ["Oolong Tea","White Tea"]
let allChaiTypes = chaiType.concat(moreChaiTypes);
let newChaiTpes =[...chaiType,...moreChaiTypes]
newChaiTpes.forEach((chai)=>{
    console.log(chai);
})


//Object
let chaiRecipe = {
    name: "Masala Chai",
    ingredients:{
        teaLeaves: "Assam Tea",
        milk:"Full Cream Milk",
        sugar:"Brown sugar",
        spices:["Daalchini","Ginger"]
    },
    instruction:"Boil water,add tea leaves,sugar and spices"
}

console.log(chaiRecipe.name);
console.log(chaiRecipe.ingredients.spices[1]);


let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction:"Boil Water, add tea leaves,milk,sugar,spices,with some love"
}

console.log(updatedChaiRecepie);

let {name, ingredients} = chaiRecipe //object destructuring
let [firstChai, secondChai] = chaiType //Array destructuring

console.log(ingredients);
console.log(secondChai);




