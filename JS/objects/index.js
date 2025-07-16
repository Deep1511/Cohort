const person = {
    x:10,
    firstName: "Deep",
    lastName: "Patel",
    hobbies:["coding","gym"],
    isMarried:false,
    getFullName: function(){
        return "Deep Patel"
    },
    address:{
        hno:1,
        stree:2,
        countryCode:'IN',
        state:'GJ'
    }
}

console.log(person.address.xx);

const remote = {
    color:'black',
    brand:'xyz',
    dimension: {height:1,width:1},
    turnOff:function(){},
    voluming:function(){}
}

console.log(remote);
