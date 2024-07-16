let month = 2

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("not a month");
        break;
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}