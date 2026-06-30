
let age = 8

if (age >= 18){
    console.log("you're eligible")
} else{
    console.log("you're not eligible")
}

// we can remoce the curly braces if there is only one statement

if (age >= 18)
    console.log("you're eligible")
else
    console.log("you're not eligible")

//multiple condition

let score = 44


if ( score >= 90 ){
    console.log("grade A")
} else if (score >= 80){
    console.log("grade B")
} else if (score >= 70){
    console.log("grade C")
} else{
    console.log("Fail")
}

const condition = true
const innerCondition = true

if (condition){
    console.log("outer if")
    if (innerCondition){
        console.log("inner if")
    } else{
        console.log ("inner else")
    }
} else{
    console.log("outer else")
}

//switch case, so if there's multiple condition based on single value switch case is better
  
let position = 1 
switch (position){
    case 1 : 
    console.log( "print 1"); break
    case 2 :
    console.log( "print 2"); break
    case 3 : 
    console.log( "print 3"); break
    case 4 : 
    console.log( "print 4"); break
    default:
        console.log("nothing matched")
}

let day
switch (day) {
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break
default: console.log("nothing found")
}

let name = "tapaScript"

switch (name) {
    case "tapaScript":
        console.log("you're TapaScript");
        break
    case "Google":
        console.log("this is google");
        break
    default: console.log("none of the answer matched")
}