let nums = [1, 2, 3]
let min = Math.min.apply(Math, nums)
let max = Math.max.apply(Math, nums)
console.log(`The smallest number which include array nums is ${min} and the biggest number is ${max}`)