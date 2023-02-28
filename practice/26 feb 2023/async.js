// let name = "shailesh";
// let detail = `The name of the person is ${name}`;
// console.log(detail);
// console.log("hello");
// setTimeout(() => {
//   console.log("executing settimeout");
// }, 2000);
// console.log("end");

// const add = (a, b) => {
//   let sum = a + b;
//   setTimeout(() => {
//     console.log(sum);
//   }, 3000);
//   return sum;
// };
// const sub = (a, b) => {
//   let sub = a - b;
//   console.log(sub);
//   return sub;
// };
// const mul = (a, b) => {
//   let mul = a + b;
//   console.log(mul);
//   return mul;
// };
// const Addition = (a, b, callBackFunction) => {
//   callBackFunction(a, b);
// };
// const Substraction = (a, b, callBackFunction) => {
//   callBackFunction(a, b);
// };
// const Multiplication = (a, b, callBackFunction) => {
//   callBackFunction(a, b);
// };

// Addition(2, 3, add);
// Substraction(11, 2, sub);
// Multiplication(14, 32, mul);

// const seriesOfoperation = (a, b) => {
//   Addition(a, b, () => {
//     console.log(a + b);
//     Substraction(a, b, () => {
//       console.log(a - b);
//       Multiplication(a, b, () => {
//         console.log(a * b);
//       });
//     });
//   });
// };
// seriesOfoperation(3, 4);

// let addition = (arr) => {
//   return new Promise((resolve, reject) => {
//     let a = arr[0];
//     let b = arr[1];
//     if (a < 0 || b < 0) {
//       reject("Pass only non negative numbers");
//     } else {
//       let sum = a + b;
//       console.log("Sum is ", sum);
//       resolve(arr);
//     }
//   });
// };

// addition([0, -1])
//   .then((result) => {
//     console.log("arr returened is", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let substraction = (arr) => {
//   return new Promise((resolve, reject) => {
//     let a = arr[0];
//     let b = arr[1];
//     if (a < 0 || b < 0) {
//       reject("Both number should be positive");
//     } else {
//       let sub = a - b;
//       resolve(sub);
//     }
//   });
// };
// substraction([2, 3])
//   .then((result) => {
//     console.log("substraction is" + result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const newPromise2 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//       resolve("resolved")
//   },2000)
// //   resolve("resolved");
// });
// const newPromise = Promise.resolve(100);
// const newPromise3 = Promise.reject("rejected");
// //all , any , allSettled
// Promise.any([newPromise, newPromise2, newPromise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

// const fun = (a) =>{
//     return new Promise((resolve,reject)=>{
//         if(isNaN(a)){
//             reject("error");
//         }
//         else{
//             var ans = "";
//             var time = 0;
//             if(a%2==0){
//                 ans = "even"
//                 time = 2000;
//             }
//             else{
//                 ans = "odd";
//                 time = 1000;
//             }
//             setTimeout(()=>{
//                 resolve(ans)
//             },time);
//         }
//     })
// }
// fun("11").then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })



const fun = (a) => {
  return new Promise((resolve, reject) => {
    if (isNaN(a)) {
      reject("error");
    } 
    else if(a%2==1){
        setTimeout(()=>{
            reject("odd")
        },1000)
    }
    else {
      setTimeout(() => {
        resolve("even");
      }, 2000);
    }
  });
};
fun("10")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });