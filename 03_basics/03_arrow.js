const user = {
    username : "ulluck",
    price : 450,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to server`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Singh"
// user.welcomeMessage()
// console.log(this);


// const ulluck = (value1, value2) => {return value1 + value2}
const ulluck = (value1, value2) => (value1 + value2)
console.log(ulluck(5,2));