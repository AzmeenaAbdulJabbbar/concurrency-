console.log("one");
// methode 1
setTimeout(function () {
    console.log("hello world");
}, 6000);
//method 2
function greet() {
    console.log("hello");
}
setTimeout(greet, 4000);
console.log("two");
