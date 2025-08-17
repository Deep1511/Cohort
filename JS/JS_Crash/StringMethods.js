let firstName = "Deep";
let lastName = "Patel";
let fullName = firstName + " " + lastName;

console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf());
console.log(fullName.slice());


let newString = "PatelDeep"

console.log(newString.charAt(2));
console.log(newString.charCodeAt(2));


let str2 = "Bhikhubhai"
let combineString = newString.concat(str2);
console.log(combineString);

console.log(newString.endsWith('ep'));

console.log("Includes", newString.includes("deep") ? "Deep" : "Not Deep");


console.log("IndexOf ",newString.indexOf("Deep"));
console.log("Hello World".indexOf("",3));
console.log("Hello World".indexOf("",13));

console.log(newString.lastIndexOf("e"));


//locale compare before
console.log("a".localeCompare("c"));

//locale compare after
console.log("checking".localeCompare("again"));

//locale compare equivalent
console.log("a".localeCompare("a"));


const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
console.log(items);


//Match
const regex = /[A-Z][a-z]/g;
const found = newString.match(regex);
const foundAll = newString.matchAll(regex);

console.log(found);
console.log([...foundAll]);


console.log("abc".repeat(4));

console.log(newString.replace("Deep","Mahi"));
console.log(newString);

//slice
console.log(newString.slice(2));
console.log(newString.slice(3,8));
console.log(newString.slice(23));
console.log(newString.slice(1,-2));

//lowercase
console.log(newString.toLowerCase());
console.log(newString);


