//singleton object
// Object.create()

// object literals

const mySymbol = Symbol("key1")
const mySymbol2 = Symbol("key1")

const newObj = {
    name : "ulluck",
    "full Name" : "ulluck bholluck",
    [mySymbol] : "unique symbol",
    [mySymbol2] : "even newer symbol",
    age : 15,
    city : "ulluckpur",
    isLoggedIn : false,
    lastLoginDays : ["Sunday", "Tuesday"],
    // greetings : function(){
    //     console.log("hello new ulluck");
    // }
}

// console.log(newObj.name);
// console.log(newObj["name"]);
// console.log(newObj["full Name"]);
// console.log(newObj.lastLoginDays);
// console.log(newObj[mySymbol]);

// console.log(newObj.age);
newObj.age = 500
// console.log(newObj.age);

// Object.freeze(newObj)
newObj.age = 50
// console.log(newObj.age);

// console.log(newObj);

newObj.greetings = function(){
    console.log("hello new ulluck");
}

newObj.greetings2 = function(){
    console.log(`hello new user ${this.name}`);
}

newObj.greetings()
newObj.greetings2()
// console.log(newObj.greetings()); 