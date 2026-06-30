// Task no 01
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

//Task no 02
// 2. Build an ATM Cash Withdrawal System
//Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let amount =400
let withdraw = amount % 100

if ( withdraw === 0) {
    console.log("Withdrawal successful")
}else{
   console.log("Invalid amount") 
}

//Task no 03
// Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let operator = " * "
let number1 = 7
let number2 = 2

switch(operator){
    case(" + ") : { console.log( "the output is ", (number1 + number2)); break}
    case(" - ") : {console.log( "the output is ", (number1 - number2)); break}
    case(" * ") : {console.log( "the output is ", (number1 * number2)); break}
    case(" % ") : {console.log( "the output is ", (number1 / number2)); break}
}

//Task 04 
// 4. Pay for your movie ticket, Imagine, the INOX charges ticket prices based on age:
// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

let age = 98

if (age<=18){
    console.log("The ticket price is $3")
} else if((age>18) && (age<=60)){
      console.log("The ticket price is $10")  
}else{
    console.log("The ticket price is $8") 
}


//Task no 05

let month = "April"
switch(month){
    case ("January" && "February") : {console.log("your are Capricorn"); break;}
    case ("March" && "April") : {console.log("your are Aquriaus"); break;}
    case ("May" && "June") : {console.log("your are Pisces"); break;}
    case ("July" && "August") : {console.log("your are Aries"); break;}
    case ("Septemper" && "October") : {console.log("your are Libra"); break;}
}


//Task no 06
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

let side1 = 2
let side2 = 3
let side3 = 4


if (side1 === side2 && side2 === side3){
    console.log("Equilateral Triangle.")
} else if (side1 === side2 || side1 === side3 || side2 === side3){
    console.log(" Isosceles Triangle.")
} else{
    console.log(" Scalene Triangle.")
}


