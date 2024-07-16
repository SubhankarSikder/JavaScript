let myArray = [1, 5 ,2, "ulluck", 7, "singh"]
const myObj = {
    name: "ulluck",
    age: 15,
    male: true
}

//simple for loop
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])  
// }


//simple for-of loop(used for arrays)
// for (const i of myArray) {
//     console.log(i);
// }


//simple for-in loop(used for objects)

// for (const key in myObj) {
//     console.log(`Value of ${key} is ${myObj[key]}`);
// }
// for (const key in myArray) {
//     console.log(`Value of ${key} is ${myArray[key]}`);
// }



//simple for-each loop

// myArray.forEach(i => {
//     console.log(i);
// });
// myArray.forEach(function (i){
//     console.log(i);
// })
// Object.entries(myObj).forEach(([key,value]) => {
//     console.log(`value of ${key} is ${value}`);
// })





//example of iteration over an array of objects(very common during database operations)

const newArray = [
    {
        username: "khorgos singh",
        age:20,
        male: true,
        alive: false
    },
    {
        username: "bholluck",
        age:10,
        male: true,
        favourite: "yes"
    },
    {
        username: "kutkut",
        age:5,
        male: false,
        favourite: "yes",
        alive: true,
        legs:4
    }
]

newArray.forEach((i)=> {
    console.log(i.alive??true);
    console.log(i.age);
    console.log(i.favourite??"definitely"??"maybe");
})
