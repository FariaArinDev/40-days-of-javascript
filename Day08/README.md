1. Create the GEC and FEC with CP and EP flow: 

const message = "I can do it";

fucntion sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);

GEC

Creation Phase:

message : undefined

sum : f() store in the memory

mul : f() store in the memory

calc : f() store in the memory

getRessult: f () store in the memory

Execution Phase: 

message :  “I can do it”

getResult  :  Execute 

FEC: for getResult

CP: 

a = uninitilized

b =  uninitilized

EP: 

a = 8

b = 5

calc: Execute

FEC : for calc

CP:

a = uninitilized

b =  uninitilized

EP:

a = 8

b = 5

sum : Execute

FEC: for sum

CP:

a = uninitilized

b =  uninitilized

result : undefined

EP:

a = 8

b = 5

result : 8+5

mul: execute
FEC : for mul

CP:

a = uninitilized

b =  uninitilized

result = undefined

EP: 

a = 8

b = 5

result : 8 * 5

2. Create the Stack and Heap Flow:
<img width="1000" height="800" alt="image" src="https://github.com/user-attachments/assets/35c28986-5ed4-4b6b-bf15-ea7b682601ce" />

3. Create the Stack Diagram

<img width="1200" height="300" alt="image" src="https://github.com/user-attachments/assets/fd1239a2-9537-4d34-8cca-542ac7ba8ed1" />
