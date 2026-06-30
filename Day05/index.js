// for loop
// best for fixed number of iteration, like we know wxactly how many times we need to run the code

// for(initialization; condition; update){
//     //code
å// }

for(let count=1; count<=5; count++){
    console.log("iteration/loop", count)
}

//addition of even numbers  1 to 100

let sum = 0
for (let i =1 ; i <= 100 ; i++){
    if (i % 2 === 0){
        sum += i
    }
}
console.log("Sum is", sum)


let language = "JavaScript"

for(let i = 0; i < language.length; i++){
    console.log(language.charAt(i))
}

//nested loop : works for multi dimention data

for(let i = 1 ; i<= 3 ; i++){
    for( let j = 1; j<= 3; j++){
        console.log("Row", i , "column", j )
    }
}

// break and continue
//break is for breaking the iteration means no more iteration needed and continue is for skipping a perticular iteration

for (i = 1 ; i <=5; i++){
    if(i = 3){
        break
    }
    console.log(i) // answer is 1, 2 casue we console after the break
}

//  

for (i = 1 ; i <=5; i++){
    if(i === 3){
        continue 
    }
    console.log("contnue", i) // answer is 1, 2 casue we console after the break
}

//multiple counters, print 2 counter, 1 for positive and 1 negative 

for(i = 1, j = 10; i <=10 && j >= 1; i++, j-- ){
    console.log( i , j)
}

//while loop
// runs as long as any condition is true. when we dont know in advane how many iteration are needed

// while(condition){
     
// }

let counter = 1;

while(counter<= 5){
    console.log(counter)
    counter++
}

//do - while : which guarantees at least one number of loop, like you have to go to the grocery to buy atleast a kilo of potato.

// do{
//     //code
// } while(condition)


let num = 1
do{
    console.log(num)
    num++
} while( num<= 5)

//infinite loop

//  for(;;){
//     console.log("looping forever")
//  }

// while(true){
//     console.log("looping forever")
// }

// do{

// } while(true){

// }