/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/

// 1.
let array = ["Mercury", "Venus", "Earth", "Mars"];
// 2.
array.push("Jupiter");
// 3.
array.unshift("Sun");
// 4.
array.pop();
array.pop();
// 5.
array.shift();
array.shift();
///////////////
console.log(array)

