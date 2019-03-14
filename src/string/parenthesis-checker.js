// Given an expression string exp. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the program should print 'balanced' for exp = “[()]{}{[()()]()}” and 'not balanced' for exp = “[(])”

// Input:
// The first line of input contains an integer T denoting the number of test cases.  Each test case consists of a string of expression, in a separate line.

// Output:
// Print 'balanced' without quotes if the pair of parenthesis is balanced else print 'not balanced' in a separate line.

// Constraints:
// 1 ≤ T ≤ 100
// 1 ≤ |s| ≤ 105

// Example:
// Input:
// 3
// {([])}
// ()
// ([]

// Output:
// balanced
// balanced
// not balanced


function isParenthesisBalances(evaStr) {
    let arrOfParenthesis = []
    let balanceParenthesis = false
    let arrOfStr = evaStr.split('')
    arrOfStr.forEach((parenthesis) => {
        if (balanceParenthesis) {
            return 'not balanced'
        }
        if (parenthesis === '{' || parenthesis === '(' || parenthesis === '[') {
            arrOfParenthesis.push(parenthesis)
        } else {
            let lastParenthesis = arrOfParenthesis[arrOfParenthesis.length - 1]
            if ((parenthesis === ')' && lastParenthesis === '(') || (parenthesis === '}' && lastParenthesis === '{') || (parenthesis === ']' && lastParenthesis === '[')) {
                arrOfParenthesis.pop()
            } else {
                balanceParenthesis =true
            }
        }
    })

    if (arrOfParenthesis && arrOfParenthesis.length) {
        return 'not balanced'
    }

    if (balanceParenthesis) {
        return 'not balanced'
    }

    return 'balanced'
}

// test case 1
console.log('test case 1', isParenthesisBalances('{([])}'))
console.log('test case 2', isParenthesisBalances('()'))
console.log('test case 3', isParenthesisBalances('([]'))