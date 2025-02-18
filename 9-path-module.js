const path = require('path')

console.log(path.sep)//path.sep is helpful when dealing with file paths in a cross-platform manner. Instead of hardcoding '/mac or linux' or '\windows', you can use path.sep to ensure compatibility.
const filePath = ['Users', 'alize', 'Documents', 'file.txt'].join(path.sep);
console.log(filePath);

const filePath2=['Content', 'Subfolder', 'test.txt'].join(path.sep)
console.log(filePath2);

const base=path.basename(filePath2)
console.log(base)//returns of the base file name

const absolute = path.resolve(__dirname, 'Content', 'Subfolder', 'test.txt')
console.log(absolute)//gives the actual path, not the relative ome