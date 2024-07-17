function parentFunc(func:()=> void){
    console.log("i am the parent function")
    func();// child function
}
//methode 1
function childFunction(){
    console.log( "i am thr child function")
}
parentFunc(childFunction);
// method 2
parentFunc(function (){
    console.log("i m the callback function")
});