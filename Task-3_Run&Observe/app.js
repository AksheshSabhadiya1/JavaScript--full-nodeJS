
const fs = require('fs')

// console.log("1. start of script");

// //Synchronous (blocking) operation
// console.log("2. Read File Synchronously");
// const datasync = fs.readFileSync('userData.txt','utf-8')
// console.log("3. Synchronous read complete");

// //Asynchronous (non-blocking) operation
// console.log("4. Reading File Asynchronously");
// fs.readFile('userData.txt','utf-8', (error)=>{
//   if(error) throw error
//   console.log('6. Asynchronous read complete');
// })

// console.log("5. End of script");





console.log("Event Loop Sequence");
console.log("1. start of Script");

//Microtask queue (promise)
Promise.resolve().then(()=>console.log('2. Microtask 1'))

//Timer queue
setTimeout(()=> console.log('3. Timer 1',0))

//I/O queue
fs.readFile('userData.txt', () => console.log('4. I/O operation'))

//Check queue
setImmediate(()=>console.log('5. Immediate 1'))

//Close queue
process.on('exit', ()=> {
  console.log('6. Exit event');
})

console.log("7. End of Script");