//Arithmetic operator
let a = 12
let b = 5

let f_name = "Faria"
let t_name = "Arin"


console.log(f_name+ t_name )  //30

console.log(a+b) //30
console.log(a-b) // -10
console.log( a**b)
console.log(a % b)

let count = 5
// console.log(count++) 
// console.log(count) 
console.log(++count) 
console.log(--count) 

//Assigning operator
let x = 10
x +=5 // x = x + 5 (15)
x -= 3 // x = x - 3 (12)
x *= 2 // x = x * 2 (24)

//Comparison operator
console.log (4 == 5)
console.log (0 == false) // true cause both are negative number thats why js gives true.
console.log (3 == '3') // true, but this is wrong cause one is number and one is string

console.log (4 ===  '4')
console.log (4 !==  '4')

//NaN = not a number

let obj1 = {'name': 'Faria',} // XX0011
let obj2 = {'name': 'Faria',} //XX0022

console.log(obj1 === obj2) // false cause theey both are in the different heap memory with unique id


4>3  //true
2< 7 //true
3 <= 9 // true
9>= 3 //true

//logical operators

// &&  || ?? !

// op1 && op2 

console.log ( false && false) // false
console.log ( false && true ) // false
console.log ( true && false ) //false
console.log ( true && true  )  //true

console.log( "Cow" && "Horse") //Horse, if we cant convert the first operant to false then the 2nd will return

console.log( 4>5 && 4 === 6)

//op1 || op2

console.log ( false && false) // false
console.log ( false && true ) // true
console.log ( true && false ) //true
console.log ( true && true  ) //true

console.log( "Cow" && "Horse") // cow , cause JS can convert anything to positive value except the negative

// ?? if the first op1 is null or undefined we will return the op2, else op1

console.log( null ?? 2 ) //2
console.log( 0 ?? 2 ) //0
console.log( undefined ?? 2 ) //2

//conditional ternary operator
condition ? val1 : val2

let age = 23

age >= 60? "senior citizen" : "non citizen"

//bitwise operators
10 in decimal
//10 in 32 bits representation of 0, 1

// & | ^ << >> 

15 & 9

//15 binary is 1111, and 9 is 1001


// 1111 & 1001 = 1001 = 1*(2**0)+ 0*(2**1 ) + 0 * (2**2) + 1 * (2**3) =1 + 0 + 0 + 8

// 9/2 = 4 (1)
// 4/2 = 2 (0)
// 2/2 = 1 (0)

// 15 | 9

// 1111 | 1001 =1111 ,  // 1 and 1 is 1 and 1 + 0 is 1

// 15^ 9

// 1111 ^ 1001, = 0110// if just one of them is 1 then it will return !


// 9 << 2
 
// 1001 << 22 = 100100

// 9>> 2 = 001001

// //grouping


let p = 1
let q = 2
let r = 3

console.log(p + Q * r) // 1+ 2 *3 = 7
console.log(p+Q) * 4 // (1+2) * 4 = 12


//typeof

typeof "faria" //string
typeof false // boolean

let size = 100
typeof size // number

const number = [1, 2, 3, 4]

typeof number //object, cause in JS array is also seen as object not as an array

typeof null //object

//instanceof
//object