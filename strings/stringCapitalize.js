// Write a function that accepts a string as a parameter and converts the first letter of the string in upper case

function strCapitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

console.log(strCapitalize("javascript"));