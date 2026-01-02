// Write a js program to find the most frequent item of an array

function mostFreqItem(arr) {
    let freqObj = {}

    arr.forEach(item => {
        if(!(item in freqObj)){
            freqObj[item] = 1;
        }else{
            freqObj[item] += 1
        }
    })

    let maxFreq =  Math.max(...Object.values(freqObj))

    let keyValueArr = Object.entries(freqObj)
    let resultArr = keyValueArr.filter(arr => {
        return arr[1] === maxFreq
    })
    return resultArr
}

console.log(mostFreqItem([1, 2, 2, 2, 3, 4, 4, 4, 5]))