//Task no 01

function celsiusToFahrenheit (celcius){
let Fahrenheit = (celcius * 9/5) + 32 
console.log(Fahrenheit)
}
celsiusToFahrenheit(34)

//Task 02
function findMax (num1, num2){
 if (num1>num2){
    console.log("number 1 is max")
 } else {
    console.log("number 2 is max")
 }
}
findMax(-230 , -45)

//Task 03
let reversedNum = ""
function isPalindrome(str) {
    for(let i = str.length - 1; i>= 0 ; i--){
        reversedNum += str.charAt(i)
    }
    if (reversedNum === str) {
        console.log("the num is palindrome")
    } else{
        console.log("the num is not palindrome")
    }
}
isPalindrome("ara")

//Task 04

function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1 ; i--) {
    console.log(i)
    result *= i

  }
  console.log(result)

  
}
factorial(5);

 //Task 05
let vowels = ""
function countVowels(str){
    for (let i = 0 ; i <= str.length - 1 ; i++){
        let string = str[i].toLowerCase()
         if (string ===  "a" || string === "e" || string === "i" || string === "o" || string === "u"){
            vowels += string
            
        }
    }
    console.log (vowels)

}
countVowels("Oello there");

//Task 06
let string = "Hello world. this is faria."
let capitalWord = ""

function capitalizeWords(sentence){
 for (i = 0 ; i <= sentence.length - 1; i++){
    console.log(sentence[i])
    if (i === 0 || sentence[i - 1] === " "){
       capitalWord += sentence[i].toUpperCase()
    } else{
        capitalWord += sentence[i]
    }
        
 }
 console.log(capitalWord)
}
capitalizeWords (string);
  
 //Task 07

(function(){
    console.log("Hello Javascript")
 })()


 //Task 08

 function greet(name){
    name()

 }

 greet(function (callback){
    console.log("This is the message")
 })

// Task 09
//f1
// f2

//Task 10

//f2 >empty
//f3 = f3 >f1 - finish and poped then f3
//f1()