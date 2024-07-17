console.log(`start `);

let userName = "azmeena";

console.log(userName);

let age = 18;
if (age > 18 ){
    console.log("you are an adult")
}else{
    console.log("you are not an adult")
}
const bestFriend :string[]= ["marium", "zubaida","zahra"];
for (let i = 0; i < bestFriend.length ;i++){
    console.log(bestFriend[i]+"is my best friend")
}
type Tcar = {
    isUsed : boolean;
    brand :string;
    model  : string
    
};
const car :Tcar ={
    isUsed : false,
    brand :"honda",
    model  : "2014"
}
console.log(car.brand);
console.log(car['isUsed']);
console.log("the end ");