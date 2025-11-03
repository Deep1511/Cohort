function prepareChai(type){
    if(type==="Masala Chai"){
        console.log("Adding Spices to the chai");
    } else {
        console.log("Preparing regular chai");
    }
}

prepareChai("Masala Chai")
prepareChai("Ginger Chai")


function totalPay(amount){
    // convert to number 
    // if(amount > 1000){
    // //    let discount = (amount * 10)/100;
    // //    return (amount - discount); 
    // return amount * 0.9;
    // }
    // // else{
    // //     return amount;
    // // }
    // return amount;

    return amount > 1000 ? amount * 0.9 : amount
}

let finalBill = totalPay(1200)
console.log(`Total bill is ${finalBill}`);


function trafficLight(color){
    let converToLower = color.toLowerCase();
    switch (converToLower) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Slow Down");
            break;
        case "green":
            console.log("Go");
            break
        default:
            console.log("Chalan kaat do");
            break;
    }
}

trafficLight("yellow")


function checkTruthyValue(value){
    if(value){
        console.log("Truthy");
    } else {
        console.log("Falsy");
    }
}

checkTruthyValue(1)
checkTruthyValue(0)
checkTruthyValue("Deep")
checkTruthyValue("")
checkTruthyValue([1,2,"Deep"])
checkTruthyValue({})
checkTruthyValue([])


function login(username,password){
    if(username === 'admin' && password === '1234') {
        console.log("Login successful");
    } else {
        console.log('Invalid credentials');
    }
}

login("admin",'1234');
