let myArray = [1, 5 ,2, "ulluck", 7, "singh"]
let myNewArray = [1,5,7,9,2,0,41]
let newArr= [1,2,3,4,12]
let inVal =0


// let newValues = myNewArray.filter( (item) => (item > 4) )
// console.log(newValues);

// let ulluck = myNewArray.map(item => item+10)

// let ulluck = myNewArray.filter(items => ((items % 2)==0)).map(items => items+5)
// console.log(ulluck);


let ulluck = newArr.reduce((x,y) => x+y,inVal)
console.log(ulluck);

// let newValues = []
// myNewArray.forEach( (item) => {
//     if(item>4){
//         newValues.push(item)
//     }
// } )
// console.log(newValues);


let apiVar = {
    "results":[
        {
            "gender":"male",
            "name":{
                "title":"Mr",
                "first":"Nirav",
                "last":"Shukla"
            },
            "location":{
                "street":{
                    "number":204,
                    "name":"Rasta Peth"
                },
                "city":"Unnao",
                "state":"Chhattisgarh",
                "country":"India",
                "postcode":35678,
                "coordinates":{
                    "latitude":"10.5134",
                    "longitude":"-105.5253"
                },
                "timezone":{
                    "offset":"-6:00","description":"Central Time (US & Canada), Mexico City"
                }
            },
            "email":"nirav.shukla@example.com",
            "login":{
                "uuid":"ae30bf24-cdba-4c24-88e2-1511243c75a0",
                "username":"tinydog195","password":"legend",
                "salt":"UZRQYjsH","md5":"e777e7acc28b398ef6337950c634c24f","sha1":"f2a486581363b00b83f2e9d45de1e2401b8c364e","sha256":"0072e6ceec14de8faa1d1bcf1dad3811e9fcd4a1a2b576fc9d9c80a065a68dcb"
            },
            "dob":{
                "date":"1962-12-29T04:19:33.519Z","age":61
            },
            "registered":{
                "date":"2004-03-13T17:52:39.388Z","age":20
            },
            "phone":"7217436086",
            "cell":"8173636895",
            "id":{
                "name":"UIDAI",
                "value":"910992077120"
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/men/6.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/6.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/6.jpg"
            },
            "nat":"IN"
        }
    ],
    "info":{
        "seed":"5571dbfcf6c60d92",
        "results":1,
        "page":1,
        "version":"1.4"
    }
}

// apiVar.results.forEach(items => {
//     console.log(`gender is ${items.name.first}`);
//     console.log(items.location.street.name);
//     console.log(items.location.state);
//     console.log(items.location.coordinates.latitude);
//     console.log(items.location.timezone.description);
//     console.log(items.login.password);
//     console.log(items.dob.age);
//     console.log(items.picture.large);
    
// })
// console.log(apiVar.info.seed)
