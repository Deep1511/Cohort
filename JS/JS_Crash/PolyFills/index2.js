function ptaNahi(fn,delay){
    let myId;
    return function(...args){
        clearTimeout(myId);
        myId = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

function greet(name){
    console.log(`Hello ${name}`)
}

const sachMeNahiPata = ptaNahi(()=>greet("deep"),3000)
sachMeNahiPata()
sachMeNahiPata()
sachMeNahiPata()

ptaNahi(greet('deep patel'),3000)


//debouncing
//remove past request => keep reference of it.
// fire a new request
// userRequest() => debouncesRequest()