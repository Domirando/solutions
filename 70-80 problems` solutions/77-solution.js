let num = 234;
console.log(num)
num = num.toString().split('')
let realNum = num.map(Number)

let result = realNum.reduce(function(sum, current) {
    return sum + currnt;
})
console.log(result)