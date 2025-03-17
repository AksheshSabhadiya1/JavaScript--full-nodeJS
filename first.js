console.log("Hello NodeJS");

const fs = require('fs')

const a = 10
const b = 20

const data = `Sum of ${a}+${b} is ${a+b} and Multiply of ${a}*${b} is ${a*b}.`

fs.writeFile('output.txt',data, (error)=>{
  if(error) console.log("Error: ", error);
  console.log("Writing into File Successfully.");
})
