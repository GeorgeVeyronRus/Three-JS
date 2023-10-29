console.log("hello")

var a = 3.14


//variable

let number = 9;
const name ="Tegar"

var a = "binus";

{
    let number = 10;
    console.log(number)
}

console.log(number)
// number = 10;
// name = "zenli";

// console.log({
//     number,name,a
// })


// Pake const aja 
//hanya gunakan let kalau buat variabel yang ingin berubah ubah



//FizzBuzz
// print 1 - 15 
//kalau bisa dibagi 3 print fizz
//kalau bisa dibagi 5 print buzz


// sELECTION & Repitition
for (let i = 1; i<= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if(i % 3=== 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


function sayHello(name) {
    //template literals
    console.log(`Hello ${name}, good afternoon `)
}

sayHello("ZN")

const add = function(a, b) {
    return a + b
}

function subtract(x, y){
    return x - y
}

const multiply = (x, y)=>{
    return x * y
}


console.log(subtract(8,5))
console.log(add(3,4))
console.log(multiply(5,4))

const numbers = [23 , 456, 48 ,47 ,14 ,123 ,15,1515,1514,1234,1562,412,2185]

//filter array diatas menjadihanya angka genap
//(value: number, index: number, array: number[]) => value is number

const evenNumbers = numbers
    .filter((value=>  value % 2 === 0))

console.log(evenNumbers)

numbers.forEach((number) => console.log(number))

const multipliednumbers = numbers.map((numbers) => numbers * 2) 
console.log(multipliednumbers)


import Car from "./car.js";

const car = new Car("Avansa", 15000)
car.printDetail()