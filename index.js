function calcPow(base, exponent) {
    if(base === 0 || exponent === 0) {
        return 1
    }
    return Math.pow(base, exponent)
}
console.log(calcPow(2, 3))
console.log(calcPow(0, 0))