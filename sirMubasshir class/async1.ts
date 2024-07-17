// washing machine using call back

// function washing(cb:()=>void){
//     console.log("washing started");
//     setTimeout(()=>{
//         console.log("washing done");
//         cb();
//     },5000)
// }
// function soaking(cb:()=>void){
//     console.log("soaking started");
//     setTimeout(()=>{
//         console.log("soaking done");
//         cb()
//     },3000)
    
// // }
// // function drying(){
// //     console.log("drying started");
// //     setTimeout(()=>{
// //         console.log("drying done");
// //     },2000)
// // }
// // console.log("foalding laundry")
// // washing(()=>{
// //     console.log("bchon ko")
// //     soaking(()=>{
// //         drying();
// //     });
// // });
// // console.log('i am making biryani')



// // washing machine using promises


function washing1(){
    console.log("washing start")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("washing done")
        }, 5000);
    });
}
function soaking1(){
    console.log("soaking start")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("soaking done ")
        }, 3000);
    });
}
function drying1(){
    console.log("drying start")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("drying done ")
        }, 2000);
    });
}

// washing1()
//.then((value)=>{
// console.log(value);
// return soaking1();
// })
// .then((value)=>{
//     console.log(value)
//     return drying1();
// })
// .then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })
 // await _________________-
  
 async function runWachingMachine(){
try{
 
    const result1 = await  washing1();
    console.log(result1);
   const result2 = await soaking1();
   console.log(result2)
    const result3 =await drying1();
    console.log( result3)
}
 catch (error){
    console.log(error)
}finally{
    console.log("i will run anyway")
}
   
 }
 console.log( 'faulding laundry')
 runWachingMachine();
 console.log( ' making biryani');
