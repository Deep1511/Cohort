Object.prototype.chai = function(){
    console.log('Chai');
}

const obj = { x:1,length:1};
obj.chai()

const arr = [1,2,3]
if(!Array.prototype.fill){
    //Falllback - Polyfill
    Array.prototype.fill = function (){

    }
}