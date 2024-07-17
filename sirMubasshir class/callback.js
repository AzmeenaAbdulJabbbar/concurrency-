function parentFunc(func) {
    console.log("i am the parent function");
    func();
}
function childFunction() {
    console.log("i am thr child function");
}
parentFunc(childFunction);
parentFunc(function () {
    console.log("i m the callback function");
});
