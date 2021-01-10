let nums = [1, 5, 3, 4]
let min = Math.min.apply(Math, nums)
let max = Math.max.apply(Math, nums)
for (let i = 0; i == nums.length; i++){
    if (nums[i]===min){
        console.log(`The lowest number of nums array is ${nums[i]}`)
    }else if(nums[i]===min){
        console.log(`The biggest number of nums array is ${nums[i]}`)
    }
}