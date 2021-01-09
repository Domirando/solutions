const findMinIndex = (arr, min, minIndex, i) => {
    if (arr.length === i) return {minIndex, min};
    if (arr[i] < min) {
        min = arr[i]
        minIndex = i;
    }
    return findMinIndex(arr, min, minIndex, ++i)

}

const arr = [5, 5, 1, 11, 6, 7, 9, 22];
const minIndex = findMinIndex(arr, arr[0], 0, 0)
console.log(minIndex);