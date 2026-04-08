//in an array of objects filter out those objects which have gender's value male


let arrOfObj = [
    {
        name: "gouse",
        gender: "male"
    },
    {
        name: "saniya",
        gender: "female"
    },
    {
        name: "nizam",
        gender: "male"
    }
]

function getValuesBasedOnGender(arr) {
  return arr.filter(obj => obj.gender === "male")
}

console.log(getValuesBasedOnGender(arrOfObj))

// Another Method

function getValuesBasedOnGender2(arr) {
  return arr.reduce((accumulator, currentObj) => {
    if (currentObj.gender === "male") {
      accumulator.push(currentObj);
    }
    return accumulator;
  }, []);
}

console.log(getValuesBasedOnGender2(arrOfObj));