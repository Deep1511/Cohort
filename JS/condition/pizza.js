let numberOfGuest = 4;

let pizzaSize;

//small <=2
//medium <=3
//large 

if(numberOfGuest <=2){
    pizzaSize="small";
    // console.log("Order small pizza");
}else if(numberOfGuest<=3){
    pizzaSize="medium";
    console.log("Order Medium pizza");
}else{
    pizzaSize="large";
    console.log("Order large pizza");
}