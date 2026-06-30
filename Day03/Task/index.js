//Task 01
let number = 2324
let result = number % 2

{(result === 0)? console.log("the number is even") : console.log("the number is odd")}

//Task 02

let age = 13

{(age >= 18)? console.log("I am eligible for driving license") : console.log("I'm not eligible for driving license")}

//Task 03

let monthlySalary = 12300
let annualSalary  = 12300*12
let bonus         = annualSalary * .20

console.log("my total earning is", annualSalary + bonus)

//Task 04

let color = "Green"

{color === "Green"? console.log("you can go"): console.log("you must stop")}

//Task 05

 let units          = 20
 let costPerUnits   = 150
 let costPerMonth   = (costPerUnits * units) * 30
 let costPerYear    = (costPerMonth * 12)
 let finalCost      =  costPerYear - (costPerYear * .20)

 console.log("The cost per month is", costPerMonth )
 console.log("The cost per month is", finalCost )

//Task 06

let year = 2026

{ (year % 4 === 0)? console.log("This year is leap year"): console.log("this year is not a leap year")}

//Task 7

let p = 4
let q = 9
let r = 20

if ((p >= q ) && (p >= r)){
    console.log(p, "is the maximum number")
} else if ((q >= p) && (q >= r)){
    console.log( q, "is the max num")
}else{
    console.log( r, "is the max num")
}

//Task 08

let count = 5

let double = count << 1

console.log(double)