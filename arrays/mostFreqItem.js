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

    return Math.max(...Object.values(freqObj))
}

console.log(mostFreqItem([1, 2, 2, 3, 4, 4, 4, 5]))