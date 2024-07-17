// const promise = new  Promise((resolve,reject)=>{
//     reject("error");
// });
// promise.catch((error)=>{
// console.log(error)
// })


// // 2nd example
// const returnMoney = new Promise((resolve,reject)=>{
// setTimeout(()=>{resolve("money return")
// },3000)
// })
// returnMoney.then((value)=>{
//     console.log(value);
//     console.log("thanku for returning money ");

// }).catch(()=>{
//     console.log("sorry i am late ")
// })
// expample 3
const returnMoney1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("i m unable")
    },3000)
    });
    returnMoney1
    .then((value)=>{
        console.log(value);
        console.log("thanku for returning money ");
    
    })
    .catch((value)=>{
        console.log(value);
        console.log("sorry i am late ");
    })
    .finally(()=>{
        console.log("ainda paise nahi doga ")
    });