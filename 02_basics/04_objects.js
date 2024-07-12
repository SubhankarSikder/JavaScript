// const newUser = new Object()
const newUser = {}
newUser.id = "123abc"
newUser.name = "bholluck"
newUser.days = ["mon","tue","wed"]

// console.log(newUser);

const newUlluck = {
    phoneNumber : 5646561,
    name : {
        fullName : {
            firstName : "ulluck",
            lastName : "Singh"
        },
        userName : "ulluck@singh"
    },
    age : 10
}

// console.log(newUlluck.name.fullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
]

// console.log(users[0].email);
// console.table([users[0].email, users[1].id, users[2].email])

// console.log(newUser);
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));


// console.log(newUser.hasOwnProperty("days"));



const course = {
    name : "physics",
    price : 1000,
    instructor : "ulluck"
}

// console.log(course.instructor)

const {price: pr} = course
// console.log(pr);


