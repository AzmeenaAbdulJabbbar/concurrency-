function add(a, b) {
    return a + b;
}
var result = add(3, 5);
console.log(result);
function greet(name) {
    return "hello" + name;
}
var result1 = greet("azmeena");
console.log(result1);
function powerorOutage(light) {
    if (light) {
        console.log("there is ligt");
    }
    else {
        console.log("power of outage");
    }
}
var result2 = powerorOutage(false);
console.log(result2);
function coustomerFind(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
}
var result3 = coustomerFind(["hello", "azmeena", 'how are you'], "i am fine");
console.log(result3);
function logpersonName(person) {
    console.log(person);
}
var person = {
    name: "azmeena",
    age: 24,
};
logpersonName(person);
