// let fname ="Deep"
// let fname2 = fname

// console.log(fname);

// fname2 = "Prem"
// console.log(fname);

let p1 = {
    fname : 'Deep',
    lname : 'Patel',
    address : {
        h : 1,
        s : 1
    }
}

// let p2 = {
//     fname: p1.fname,
//     lname: p1.lname,
//     address: p1.address
// };


// let p2 = {
//    ...p1 ,//Speard Operator(Shallow copy),
//    address:{
//     ...p1.address
//    }
// };

console.log(p1);
const p1String = JSON.stringify(p1);
console.log(p1String);
let p2=JSON.parse(p1String)

p2.fname = "prem"
p2.lname = "mistry"
p2.address.h=20
console.log(p2);
console.log(p1);



