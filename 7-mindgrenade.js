const num1=5
const num2=10

function addValues(){
    console.log(`The sum is ${num1 + num2}`)
}
addValues()//this is not module export here, but the file was imported by F3, and becasue this function is called here, it will run upon the require call
