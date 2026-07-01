//Task no 01
//. Generate a Pyramid Pattern using Nested Loop as it is shown below:

let pattern = ""

for (let i = 1; i <=6 ; i ++){
pattern += "*" // pattern = pattern + *
console.log(pattern)
}

//Task 02

let number = 3

for (let i = 1; i <= 10 ; i++){
console.log(number, '*', i, '=',  (number * i) )
}

//Task 03

let sum = 0

for (i = 1 ; i <= 500; i++){
    if( i % 2 !== 0 ){
        sum += i

    }
}
console.log(sum)

//Task 04

for(i = 1; i <= 20; i++){
    if (i % 3 === 0){
        continue
    }
    console.log(i)
}

//task 05

let inputNumber = "2342342"
let reversedNumber = ""
let j = inputNumber.length - 1
while (j >= 0){
reversedNumber += inputNumber[j]
j--

}
console.log(reversedNumber)