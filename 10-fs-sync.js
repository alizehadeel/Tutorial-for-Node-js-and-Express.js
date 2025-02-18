const  {readFileSync, writeFileSync} = require('fs')
//both options are same
//const fs= require('fs')
//fs.readFileSync();

const first=readFileSync('./Content/first.txt', 'utf-8')
const second=readFileSync('./Content/second.txt', 'utf-8')

console.log(first, second)
//console.log(second)

const third=writeFileSync(
    './Content/result.txt', 
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}//the flag creates the append version
)//Overwrites the file by default if no flag, creates new file if needed
