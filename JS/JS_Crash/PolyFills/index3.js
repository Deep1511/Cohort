const ptaNahi = (fn, delay) =>{
    let myId = null
    // console.log("Argument",parameter);

    return (...args) =>{
        // console.log("args",args);

        if(myId === null){
            fn(...args);
            myId=setTimeout(()=>{
                myId =null
            }, delay)
        }
    }
}

function greet(name){
    console.log(`Hello ${name}`);
}

const fn =ptaNahi(()=>greet('deep'),3000)
fn()
fn()
fn()