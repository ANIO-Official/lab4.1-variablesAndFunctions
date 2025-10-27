# 4.1 Lab Variables and Functions
## Lab Overview
The purpose of this project is to practice creating variables and functions. This lab is focused on:

- Manipulating variables to perform mathmatical operations and string manipulation.
- Write and call functions that use parameters and return values.
- Use conditional logic inside functions to create more dynamic behavior.
- Refactor code to improve readability and reusability.
------------------------------------------------
## Table of contents

- [Overview](#overview)
  - [GitHub](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Reflection Questions](#reflection)
  - [Useful resources](#useful-resources)
- [Author](#author)

### GitHub Link
https://github.com/ANIO-Official/lab4.1-variablesAndFunctions 
## My process
To complete this lab, I did each task 1 a time by the steps provided.
In general when coding I followed a flow like below
 0. **Create index.js & README.md files**
 1. **Create a function with the provided name.**
    Add provided parameters
    Create Global Variables to test with later.
 2. **Create the base code**
    Conditionals where appropriate
    Call necessary functions such as capitalize()
    Return the value of the formula performed
    or, console.log the resulting value.
 3. **Test the current code to make sure it works.**
    Update global variable values to see if any erros pop up, including null values.
    Research MDN and stack overflow for helpful resources
    Fix any bugs I come across through trial and error.
    Recheck with global variable values.
 4. **Add & Commit the code**
    Once my code worked, I git add and git commit with a descriptive message.
    Commit when part of a task is done and when the full task is done to keep progress.
 5. Push to GitHub
 6. Update the README file, add, commit, & push changes.

### Built with
- JavaScript
- VSCode

## Reflection Questions

 1. **How did you approach creating more flexible functions with parameters?**
    Parameters allowed the function to be more flexible by allowing me to replace the parameters with any variables I need to run. I can reuse the function easily throughout my code and avoid rewriting it.
 2. **What challenge(s) did you face while incorporating conditional logic in your functions?**
    I accidentally forgot to put 'else' in front of my conditional checks in the age verification section of task 3. This caused two lines that ran true to both return a result in the console unintentionally.
 3. **How does refactoring improve the readability and maintainability of your code?**
    Refactoring allowed me to keep the main behavior of the function that I wanted and let me add a new parameter to check for. Because I didn't rewrite it from scratch, I avoided any unnecessary bugs. All I needed to do was reorganize it and add a conditional statement to slightly altered the orginal formula. The new conditionals will check for add the discount without hurting the base functionality.

### Useful resources

- [Stack Overflow - Make a String Uppercase in JS](https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript) - When trying to figure out how to capitalize the first letter, I came across this stack overflow question of the same type. There were multiple solutions that could work but I found the top one was easiest for me to understand. I didn't want to reference and use code I couldn't understand so I was happy to find this solution that helped!
- [MDN String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) - After finding the stack overflow solution, I looked more into the .slice() method to better understand how it was being used. I like this one most for understanding how to insert the parameters.
- [MDN parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) - To check if a parameter recieved a valid numerical value I referred back to this document about parseFloat. I was curious if I could use it to check if it the value was convertable to a float.  I chose it because normally prices have change which means there will be partial numbers / numbers behind the decimal point. Though parseInt() can still work too.

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)
