//Lab 4.1 | Variables and Functions

//Global Variables [For Testing Purposes]
//All values are temporary, you can change it for testing :)
let lastName = "Katherine"  
let firstName = "Debbie"

//Task 1 

/*Grab only the first letter in a String specifically the parameter provided,
Make it uppercase.
Add the new uppercase letter to the main word starting at the second letter
(leaving out the lowercase first letter(sliced)*/
function capitalize(word){
    return String(word).charAt(0).toUpperCase + String(word).slice(1)
}

function formatFullName(last, first){
    capitalize(last) //Capitalize the first letter
    capitalize(first) //Capitalize the first letter
    return `Welcome ${last}, ${first}` //Return the formatted string template
}

//Check if a name has been provided before logging.

if (!lastName || !firstName){
    console.log('Invalid name input.')
}
else{ console.log(formatFullName(lastName,firstName)) }
