exports.add = function add(x,y){
    return x+y
}

exports.sub = function sub(a,b){
    return a-b
}


const addnew = function add(x,y){
    return x+y
}

const subnew = function sub(a,b){
    return a-b
}

// exports.add = "This is add function"

// module.exports = function(){
//     return `this is from default export`
// }

module.exports = {
    addnew,
    subnew
}