const promiseOne = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("async task completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('async task 2 resolved');
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({'name' : 'ulluck', 'email': 'ulluck@singh.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: 'ulluck', password: 1234})
        }else{
            reject('something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username    
})
.then(username => console.log(username))
.catch(error => console.log(error))
.finally(() => console.log('promise either resolved or rejected'))




const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: 'ulluck', password: 1234})
        }else{
            reject('something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }   
}

consumePromiseFive()





async function getInformation() {
    try {
        const response = await fetch('https://randomuser.me/api/')

        const data = await response.json()
        console.log(data);

    } catch (error) {
       console.log(error);
    }   
}

getInformation()