function add ( a:number, b:number):number{
    return a +b
}
let result = add(3 ,5)
console.log(result)
function greet (name:string):string{
    return "hello"+name;
}
let result1 = greet("azmeena")
console.log(result1)

function powerorOutage(light:boolean):void{
    if (light){
        console.log("there is ligt")
    }else{
        console.log("power of outage")
    }
}
let result2 = powerorOutage(false)
console.log(result2)

function coustomerFind(arr: string[], element:string):boolean | void{
for (let i=0;i<arr.length;i++){
    if (arr[i] ===element){
        return true;
    }
}
}
 let result3 = coustomerFind(["hello","azmeena",'how are you'],"i am fine")
 console.log(result3)

 function logpersonName( person: tperson):void{
    console.log(person)
 }
 type tperson ={
    name:string;
    age:number;
 };
 const person: tperson ={
name: "azmeena",
age :24 ,
 }
 logpersonName(person)














