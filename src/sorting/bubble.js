let arrToSort = [4,2,1,5,3]


function bubbleSort(arr) {
    let sortedArr = [...arr]
    for(let i =0; i<sortedArr.length -1; i++) {
        for(let j =0; j<sortedArr.length - i -1; j++) {
            if (sortedArr[j] > sortedArr[j+1]) {
                swap(sortedArr, j, j+1)
            }
        }
    }
    return sortedArr
}

function swap(arr, src, dest) {
    const temp = arr[src]
    arr[src] = arr[dest]
    arr[dest] = temp
}
console.log('unsorted arr ', arrToSort);
let sortedArr = bubbleSort(arrToSort)
console.log('sortedArr ', sortedArr);