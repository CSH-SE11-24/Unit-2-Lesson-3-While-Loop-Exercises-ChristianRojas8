// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let i = 1

while (i <= 10){
  console.log(i)
  i++
}


// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40

let i2 = 20
  
while (i2 <=40){
console.log(i2)
   i2 += 2
}

// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let user = prompt ("Enter a Number")
user = parseInt(user)
while(user > 0){
  console.log(user)
  user--
}




// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let user3 = prompt("Enter a Number TO ADD")
let answer = 0 
let counter = 0
 

while (counter <= 100){
answer = counter + answer
  counter++
}
console.log("Sum of all these numbers are", answer)

// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let password = "PapaDios"





// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




