function swap(str, src, dest) {
    const arrOfStr = str.split('')
    const temp = arrOfStr[src]
    arrOfStr[src] = arrOfStr[dest]
    arrOfStr[dest]= temp
    return arrOfStr.join('')
}
function strPermutation(str, leftPos, rightPos) {
    if (leftPos === rightPos) {
        return [str]
    }
    let res = []
    for(let i=leftPos; i<=rightPos; i++) {
        str = swap(str, leftPos, i)
        const abc = strPermutation(str, leftPos + 1, rightPos)
        res = res.concat(abc)
        str = swap(str, leftPos, i)
    }
    return res
}

let res = strPermutation('abc', 0, 2)
console.log('res of str permutation ', res);