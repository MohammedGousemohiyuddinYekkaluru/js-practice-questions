// write a function to find a second largest number in an Array

const arr = [10, 20, 20, 8, 8, 5];

const uniqueArr = [...new Set(arr)];

uniqueArr.sort((a, b) => b - a);

const secondLargest = uniqueArr[1];

console.log(secondLargest);

//Another Method

function secondLargestNum(arr){
    let max = -Infinity;
    let second = -Infinity;

    for(let num of arr){
        if(num > max){
            second = max;
            max = num;
        } else if(num > second && num !== max){
            second = num;
        }
    }
    return second;
}

console.log(secondLargestNum(arr));