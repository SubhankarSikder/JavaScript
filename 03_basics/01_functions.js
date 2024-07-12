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
console.log("newHello = ",newHello);