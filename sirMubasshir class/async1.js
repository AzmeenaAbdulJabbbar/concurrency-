// washing machine using call back
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function washing1() {
    console.log("washing start");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("washing done");
        }, 5000);
    });
}
function soaking1() {
    console.log("soaking start");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("soaking done ");
        }, 3000);
    });
}
function drying1() {
    console.log("drying start");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("drying done ");
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
function runWachingMachine() {
    return __awaiter(this, void 0, void 0, function () {
        var result1, result2, result3, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, 5, 6]);
                    return [4 /*yield*/, washing1()];
                case 1:
                    result1 = _a.sent();
                    console.log(result1);
                    return [4 /*yield*/, soaking1()];
                case 2:
                    result2 = _a.sent();
                    console.log(result2);
                    return [4 /*yield*/, drying1()];
                case 3:
                    result3 = _a.sent();
                    console.log(result3);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 6];
                case 5:
                    console.log("i will run anyway");
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
console.log('faulding laundry');
runWachingMachine();
console.log(' making biryani');