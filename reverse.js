let array = ['w','o','r','d']
let newArr = []

for (i = 0; i<array.length; i++){
    newArr.push(array[array.length-(1+i)])
}

console.log(newArr)

let str = 'palabra'

let strArr = str.split("")

let strRev = strArr.reverse().join("")
// let newStr = str.reverse()

console.log(strRev)
