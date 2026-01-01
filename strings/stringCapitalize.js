// Write a function that accepts a string as a parameter and converts the first letter of the string in upper case

function strCapitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

// console.log(strCapitalize("javascript"));

// OR

function strCapitalize2(str) {
    return str.split(" ").map(item => 
        item.charAt(0).toUpperCase() + item.slice(1)
    ).join(" ")
}
console.log(strCapitalize2("mohammed gouse mohiyuddin"))