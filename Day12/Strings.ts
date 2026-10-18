//Strings text value or combination of char
/*
let str1:string= 'String with single quote'
let str2:string= "String with double quote"
let str3:string=  `String with back tick`

console.log(str1)
console.log(str2)
console.log(str3)
*/
// When to use back tick operator ``
/*
let num:number=10

console.log("number is:",num)
console.log(`number is: ${num}`)
*/
// String Methods

let str:string="hello, typescript"

//1. Lenght - find the lenght of sctring

console.log("length of string:",str.length)

//2. toUpperCase() toLowerCase()

console.log(str.toUpperCase())
console.log(str.toLowerCase())

//3. chatAt(index) and indexOf (string)

console.log("chrAt of string:",str.charAt(8))
console.log("indexOf of string:",str.indexOf("pes"))

//4 substring() get char from indexes

console.log(str.substring(0,5))

//5 includes() returns true or false

console.log(str.includes("escr"))

//6. startsWith()  endsWith()

console.log(str.startsWith("hello"))
console.log(str.endsWith("s"))

//7.  replace()

console.log("Update string",str.replace("typescript","world"))

//8. split() break the string into multiple parts based on the delimiter
// and returns an array

//Ex1
let words:string[]=str.split(" ")

console.log("after spliting string",words)

//Ex2

let mystring:string="abc@gmail.com,xyzabc" 

let arr=mystring.split(",")

console.log("email",arr[0])
console.log("pass",arr[1])

//9. trim()  trimstart()  triEnd() delete spaces in strings

console.log("original string",mystring)

mystring="   welcome to typescript   "

console.log("updated string with spaces",mystring)
console.log("trim method():",mystring.trim())
console.log("trimstart method():",mystring.trimStart())
console.log("trimend method():",mystring.trimEnd())

//10 concat()

let str1:string= "welcome"
let str2:string= " to typescript"
let str3:string=" and javascript"

console.log("concat strings:",str1.concat(str2))
console.log("concat strings:",str1.concat(str2).concat(str3))

// concept of immutability

let num:number= 10

let res= num + 5
console.log(res)
console.log(num)

str1="welcome"

let modifiedstring= (str1.concat(" to typescript"))

console.log(str1)

//multiline string with back tick

let multiline:string=`welcome
                        to typescript`


console.log(multiline)
