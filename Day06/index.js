//define or declare a function

function printThis(){
    console.log("This is a text")
}

// call or invoke a function

printThis()

//function as an  expression

let printMe = function (){
    console.log("print me")
}

printMe()

//parameters and argument
//parameters : is the value what we assign while  define or declaring the function
//argument : is the value that we assign while will replare the parameter of defined funtion
function sum(a, b){
 const result = a + b
 return result
} // here a and b is the parameter

let result = sum(10, 3) //  here 10 and 3 is the argument

function double(x){
    return x*2
}

console.log(double(result))

function calc( a, b = 0){
    return (2 * (a+b))
}

const resVar = calc (12, 3)
console.log(resVar)

//rest parameter

function calculateThis(x, y, ...rest){
console.log(resVar)
}
calculateThis(1,2,4,5,6,7,7,9)

//nested function
function outer(){
    console.log("outer")
    return function inner(){
        console.log("inner")
    }

}
let retFunc = outer()
console.log(retFunc())

// callback function
let toCallBuz = true
function foo(func){
    console.log("foo")
    if(toCallBuz){
        func()
    }
    
    
}
let buz = function(){
    console.log('buz')
}
foo(buz)

//pure function

function greetings(name){
    return "hello" + name
}

greetings("Arin")

// impure funtion

let greet = "hola"
function greeting(name){
    return greet + name
}

console.log(greeting("Arin"))
console.log(greeting("Arin"))
greet = "Hello"
console.log(greeting("Arin"))
console.log(greeting("Arin"))
console.log(greeting("Arin"))

//highert order function

function getCamera (camera){
    camera()
}

getCamera (function(){
    console.log("Sony")
})

function returnFunc(){
    return function(){
        console.log("Hello")
    }
}
let retFun = returnFunc()
retFun();

//arrow function
//syntax
let nameFun = (greetingmsg) => greetingmsg + " great"

nameFun("Hola");
// we dont need to use {} for one statement


//IIFE (imediately invokes function expression)

(function(num){
    console.log("hellopw" + num)
})(1)

//function stack

//recursion

function foo (){
    foo();
}

function fetchWater( count){
    console.log("fetching water" , count);
    if (count === 0){
        console.log("no more water");
        return
    }
    fetchWater(count - 1)
}

fetchWater(5)