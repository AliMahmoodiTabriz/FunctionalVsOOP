
function Calculator(x, func) {
    let result = x
    for (let i = 1; i < x; i++)
        result = func(result, i)

    return result
}

console.log("Total: " + Calculator(5, (i, result) => i + result))
console.log("Multiply: " + Calculator(5, (i, result) => i * result))
console.log("Distribution: " + Calculator(5, (i, result) => i / result))
console.log("Power: " + Calculator(5, (i, result) => i ^ result))