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

// Another Method

function getMostFrequent(arr) {
  const counts = new Map();
  let maxElement = arr[0];
  let maxCount = 0;

  for (const item of arr) {
    const count = (counts.get(item) || 0) + 1;
    counts.set(item, count);

    if (count > maxCount) {
      maxCount = count;
      maxElement = item;
    }
  }

  return { item: maxElement, count: maxCount };
}

console.log(getMostFrequent([1, 2, 2, 2, 3, 4, 4, 4, 5])); 