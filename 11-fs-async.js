const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully!');
        });
    });
});//the benefit here is that the callbacks run after the entire code, but this is useful when user is reading or writing to the file that takes alot of file and then the code wont work for anyone else 

// const  {readFile, writeFile} = require('fs')
// //both options are same
// //const fs= require('fs')
// //fs.readFileSync();

// //provide a callback
// readFile('./content/first.txt', 'utf8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//    const first=result;
//    readFile('./content/second.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     const second=result;
//     writeFile('./content/result-async1/txt', `Here is the result: ${first}, ${second}`, (err)=>{
//         if(err)
//          {console.log(err)
//             return;
//          }
//         console.log('File written successfully.');
//     });
//    });

// });


