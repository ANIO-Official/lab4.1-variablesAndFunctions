//Lab 4.1 | Variables and Functions

//Global Variables [For Testing Purposes]
//All values are temporary, you can change it for testing :)

//-----Task 1 Variables 
let lastName = "Katherine"  
let firstName = "Debbie"
//-----Task 2 Variables
let price = 24
let quantity = 10
let taxRate = 0.03
//-----Task 3 Variables
let age = 22
let isEmployed = true
//-----Task 4 Variables
let discount = 40.69

//----------------------------------------------
//Task 1 | Print LastName, FirstName

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

//Task 2 | Find total cost.

//Calculate total cost of item including tax.
function calculateTotalCost(price, quantity, taxRate){
    let totalCost = (price * quantity) * (1 + taxRate)
    return totalCost.toFixed(2)
}

//Ensure the parameters are all valid numbers, otherwise log error message
/*I used parseFloat to check if the value can be converted to a float value, 
if it cant, then it's not a number.*/
if (!parseFloat(price) || !parseFloat(quantity) || !parseFloat(taxRate)){
    console.log("Invalid input.")
}
else {console.log(calculateTotalCost(price,quantity,taxRate))}

//Task 3 | Check Program Eligibility

/*Multi-conditional check for finding eligibility based on age number and
employment boolean*/
function checkEligibility(age, isEmployed){
    if(age >18 && isEmployed){
        console.log("You're invited to the program!")
    }
    else if (age > 18 && !isEmployed){
        console.log("We're interested in adding you to our program, please fill this form with more information for further determination.")
    }
    else if (age <= 18){
        console.log("We're sorry to inform you that are not eligible for this program at this time.")
    }
    else {console.log("Please provide a valid age.")}
}
//Run the function using the Global Variables.
checkEligibility(age, isEmployed)

//Task 4 | Refactoring for Reusability

//Add new parameter and new conditional to check for discount
function finalSalePrice(price, quantity, taxRate, discount){
    if (discount){
        let cost = (price * quantity) - (discount)
        let finalCost = (cost) * (1 + taxRate)
        console.log ("Hey you made it in time for our flash sale! Your bill is " + finalCost.toFixed(2))
    }    

    else{
        let totalCost = (price * quantity) * (1 + taxRate)
        console.log( "No discounts today. Your bill is " + totalCost.toFixed(2))
    }
    
}
//Call new refactored function
finalSalePrice(price,quantity,taxRate,discount)

/*No changes to value conditional from Task 2 for main 3 parameters. 
Discount can be a false value because the customer did not find anything
on discount. So there is no need for a discount conditional check to run
in this new version of the code. Also the conditional will still check 
in this new refactoring of the base code. I checked in a test to make sure.*/