function nameS(){
    console.log("ulluck");
    console.log("singh");
}

// nameS()

function addTwoNumbers(a,b){
    if ((typeof a == "number")&&(typeof b == "number")) {
        console.log(`Sum of ${a} + ${b} is : ${a+b}`);
    }
    else{
        console.log(`Please enter numbers`);
    } 
}

// addTwoNumbers(9,4)


function hello(a,b=5){
    // console.log("ulluck");
    return a+b
}
const newHello = hello(22,10)
// console.log("newHello = ",newHello);


// rest/spread operator
function cartPrice(...num1){
    return num1
}

// console.log(cartPrice(200,500,300))


const user = {
    username: "ulluck",
    prices: 250
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"bholluck",
//     price:350
// })

const newArray = [20,410,72]

function returnSecondValue(anyarray){
    return anyarray[1]
}

// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([20,1980,99]))