const  {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first=readFileSync('./Content/first.txt', 'utf-8')
const second=readFileSync('./Content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './Content/result-sync.txt', 
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}
)
console.log('Done with this task')
console.log('Starting the next task')

