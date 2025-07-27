const obj1 = {
    fname: "Deep",
    lname : "Patel",
    getFullName : function(){
        return `${this.fname} ${this.lname}`
    }
}

const obj2 = {
    fname : "Mahi",
    lname : "Patel",
}

// obj2.__proto__ = obj1;
// obj1.__proto__ = null
console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());

// DRY - Do not repear yourself
