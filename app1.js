let arr = [2, 3, 5, 34, 68, 54, 13, 17, 30]
for(let i = 0; i < arr.length; i++) {
    let count = 0
    for(let j = 1; j <= arr[i]; j++) {
        if(arr[i]%j == 0) {
            count++
        }
    }
    if(count != 2) {
        console.log(arr[i]+" is not a Prime Number")
    }
}