// //1- Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// function xAndO(string) {
//     //create variables to store amount of x and amount of o
//     let amountOfX= 0;
//     let amountOfO = 0;
//     //Loop through all the letters and spaces of the string, if there were any.
//     for (i = 0; i< string.length; i++) {
//     //increase x count when string[i] equals to "X"
//     //Check both uppercase and lowercase
//     if (string[i]=== "x"|| string[i]==="X") {
//         amountOfX++;
//     //repeat the check for "o/O" and increase the "o" count
//     } else if (string[i]==="o" || string[i]==="O") {
//         amountOfO++ ;
//     } 
// }
// // return boolean : this syntax returns true if both counts are equal and false if they're not.
// //REMEMBER TO RETURN OUTSIDE THE LOOP!!
// return amountOfX===amountOfO
// }

// //CLASS REVIEW: 
// //I can do const lowerCaseString= string.toLowerCase() before the loop, then there's no need to check for lowercase and uppercase in the if statement.

// //VERSION WITH SPLIT
// function xAndO(string) {
//     //transform the string letters to lowerCase.
//     const lowerCaseString= string.toLowerCase()
//     //split the string on the chars I'm looking for and compare.
//     //I'll only have the same amount of elements if there're the same amount o O and X.
//     //the result will be an element for each match and an element with all the rest.
    

// //return boolean 
// return lowerCaseString.split("o").length ===lowerCaseString.split("x").length
// }

// //VERSION WITH .FILTER
// function xAndO(string) {
//     //transform the string letters to lowerCase.
//     const lowerCaseString= string.toLowerCase()
    
//   //split the str and filter the o then do the same for the x and compare the length
//   return lowerCaseString.split('').filter(e => e === 'o').length === lowerCaseString.split('').filter(e => e === 'x').length
    

// //return boolean 
// return lowerCaseString.split("o").length ===lowerCaseString.split("x").length
// }


// console.log(xAndO("xoxo"))
// console.log(xAndO("xxxohjoo"))

//_______________
// //2.- Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// function reverse(str){
//   const splitWords = str.split(" ")
//   let result=""
//   splitWords.map((word, index)=> {
//     if (index % 2 ){
//      result += " " + word.split("").reverse().join("").replaceAll(",", "").trim()
     
//     } else {
//       result += " " +word;}
//   })
//   return result.trim()
// }

// console.log(reverse("Reverse this string, please!"))
// console.log(reverse("I really don't like reversing strings!"))
//__________________________________
// 3.-  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// function inArray(array1,array2){
//     const sortedArray= []
//     array1.map((array1Element) => {
//         array2.map((array2element)=> {
//             if (array2element.includes(array1Element)) {
//                 if(!sortedArray.includes(array1Element))
//                 sortedArray.push(array1Element)
//             }
//         })
//     })
//     return sortedArray.sort()
//   }

//   console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))
//_____________________
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// function openOrSenior(data){
//     const cathegories=[]
// data.map((member)=> {
//     if(member[0]>= 55 && member[1]>7){
//         cathegories.push("Senior")
//     } else {cathegories.push("Open")}
// }) 
// return cathegories 
// }

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
//________________________
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).



// function findOdd(arr) {
//     // initialize result
//     let result = null;
//     // iterate through the array
//     arr.forEach(current => {
//       // measuring how many times an int occurs in array
//       const oddInt = arr.filter(item => item === current).length;
//       // check if int has occurred in array odd number of times
//       if (oddInt % 2 !== 0) {
//         // store int in result
//         result = current;
//       }
//     })
//     return result;
//   }

//   console.log(findOdd([7]));
//   console.log(findOdd([0]));
//   console.log(findOdd([1,1,2]));
//   console.log(findOdd([0,1,0,1,0]));
//   console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));




// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// function likes(names) {
//     const count= names.length-2
//     if (names.length ===0) {
//         return "nobody likes this"
//     } else if (names.length ===1 ) {
//         return `${names[0]} likes this`
//     } else if (names.length ===2 ) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length ===3 ) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else {
//         return `${names[0]}, ${names[1]} and ${count} others like this`
//     } 
   
//   }

//   console.log(likes([]))
//   console.log(likes(["Peter"]))
//   console.log(likes(["Jacob", "Alex"]))
//   console.log(likes(["Max", "John", "Mark"]))
//   console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     let count= 0
//     for (let i=0; i<str.length; i++) {
//         if (str[i] === "a" || str[i] === "o" || str[i] === "e" || str[i] === "i" || str[i] === "u") {
//             count +=1
//         }
//     }
//     return count;
//   }

//   console.log(getCount("hola caracola"))

// function getCount(str) {

//     const vowels= str.split("").filter(character=> character === "a" || character === "e" ||character === "i" ||character === "o" ||character === "u")
//     return vowels.length;
//   }

//   console.log(getCount("hola caracola"))


// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.
 
// function looseChange(cents){
//     let dictionary = {
//         pennies: 0,
//         nickels: 0,
//         dimes: 0, 
//         quarters: 0
//     }
// dictionary.quarters = Math.floor(cents/25)
// dictionary.dimes= (cents - dictionary.quarters)/10
// return dictionary

//   }
// function looseChange(cents){
//     const quarter= 25
//     const dime= 10
//     const nickel=5
//     const penny= 1

//     let dictionary = {
//         Pennies: Math.max(0, Math.floor(cents%quarter%dime%nickel/penny)),
//         Nickels: Math.max(0, Math.floor(cents%quarter%dime /nickel)),
//         Dimes: Math.max(0, Math.floor(cents%quarter/dime)), 
//         Quarters: Math.max(Math.floor(cents/quarter), 0)
//     }

// return dictionary

//   }

// console.log(looseChange(56) )   // {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// console.log(looseChange(-435))  // {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// console.log(looseChange(4.935)) // {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

///__________________NARCISISTIC NUMBERS
// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

// function isNarcissistic(n) {

//   const string= n.toString()
  
//   let result = null
//   for (let i = 0; i<string.length; i++) {
//      result += Math.pow(parseInt(string[i]), string.length)
//   }
  

//   return result === n ;
// }

// console.log(isNarcissistic(153))
// console.log(isNarcissistic(1))
// console.log(isNarcissistic(435))
// console.log(isNarcissistic(324))

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str){
//   const stringToArray= str.split("")
//   //console.log(stringToArray)
//   const resultArray =[]
//  for (let i=0; i<stringToArray.length; i++) {
//   if(stringToArray.length>1) {
//     resultArray.push(stringToArray.splice(0,2).join().replace(",",""))
//     console.log(stringToArray)
//   } else if (stringToArray.length === 1){
//     resultArray.push(stringToArray[0]+"_")
//   }
//  }
   
//    return resultArray
// }

// function solution(str){
//   const stringToArray= str.split("")
//   //console.log(stringToArray)
//   const resultArray =[]
// while (stringToArray.length>1){
//   resultArray.push(stringToArray.splice(0,2).join().replace(",",""))
// }
//  if(stringToArray.length){
//    resultArray.push(stringToArray[0]+"_")
//   } 
//    return resultArray
// }


// console.log(solution('abc'))
// console.log(solution('abcdef'))

//____________________
// Your magnum opus contains several thousand references to temperature, but those temperatures are all currently in degrees Celsius. You don't want to convert everything by hand, so you've decided to write a function, celsius_to_romer() that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer.

// // For example: celsius_to_romer(24) should return 20.1.

// function celsiusToRomer(temp) {
 
//   const romer= temp*(21/40)+7.5

//   return romer
// }

// console.log(celsiusToRomer(24))
// console.log(celsiusToRomer(8))
// console.log(celsiusToRomer(29))

//______________________
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// function arrayDiff(a, b) {
//   result = b.forEach(bElement => {
//     a.filter((aElement)=> aElement!==bElement)
//   });
//   return result
// }

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// function arrayDiff(a, b) {
//   result = a.includes([b])
//   return result
// }

// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2,2], [1]))
// console.log(arrayDiff([1,2,2], [2]))
// console.log(arrayDiff([1,2,2], []))



// function cutTheSticks(arr) {
//   // Write your code here
//   let numberOfSticks = arr.length
// if (!arr.length){
//   return
// } else {
//   //Determine length of the array.
  
//   //Determine the value of the shortest stick (lengthToCut)
  
//   // let nextIndex=index+1
//   let lengthToCut= arr[0]
//   let index=0
//   while (index< arr.length) {
//     if (arr.length===1) {
//       lengthToCut= arr[index]
//     } else {
//       lengthToCut=Math.min(lengthToCut, arr[index])
//       }

//     index++
//   }
//   console.log (lengthToCut)

//   //substract the value of the shortest stick from the rest of sticks.
//   //eliminate elements that are equal to 0
//   //return the length of the new array
//   let newArr= arr.map((stick)=> stick - lengthToCut).filter((element)=>element >0)
//       //console.log(arr.length)
      
//       console.log(numberOfSticks)
//       // numberOfSticks=newLength
//       //console.log(cutTheSticks(newArr))
     
//      return numberOfSticks, cutTheSticks(newArr)
// }

// }



// function cutTheSticks(arr) {
//   // Write your code here
//   //Determine length of the array.
//   let numberOfSticks = arr.length
// if (!arr.length){
//   return 0
// } 
  
//   //Determine the value of the shortest stick (lengthToCut)
//   let lengthToCut= arr[0]
//   let index=0
//   while (index< arr.length) {
//     if (arr.length===1) {
//       lengthToCut= arr[index]
//     } else {
//       lengthToCut=Math.min(lengthToCut, arr[index])
//       }
//     index++
//   }
//   console.log (lengthToCut)

//   //substract the value of the shortest stick from the rest of sticks.
//   //eliminate elements that are equal to 0
//   //return the length of the new array
//   let newArr= arr.map((stick)=> stick - lengthToCut).filter((element)=>element >0)
//       //console.log(arr.length)
      
//       console.log(numberOfSticks)
//       // numberOfSticks=newLength
//       //console.log(cutTheSticks(newArr))
     
//     return numberOfSticks, cutTheSticks(newArr)
// }
// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))

// function gemstones(arr) {
//   // Write your code here
//   //Create a variable to store the gems found
//   let gemstonesArray= []
  
//   //if array.length ===1, all minerals are gemstones.
//   if(arr.length===1){
//     arr[0].split("").forEach(mineral => {
//       gemstonesArray.push(mineral)
//     });
//   }

//   //max array.length is 100

//  //if array.length > 1...
//   if (arr.length>1){
   
//   //access first rock of the array
//   //split the rock
//   const mineralsToCheck= arr[0].split("")
//   const splitRocks = arr.map(rock => rock.split(""));
//  console.log(splitRocks)
//   //access each mineral in the first rock, so that I can compare with the minerals in the other rocks.
//   mineralsToCheck.forEach((mineral)=> {
//    if(splitRocks.every(rock => rock.includes(mineral))) {
//     gemstonesArray.push(mineral)
//     }
//   })
//  }
 
//  console.log(gemstonesArray)
//   return gemstonesArray.length
// }

// console.log(gemstones(["abc"]))
// console.log(gemstones(["abc", "abc", "bc"]))


//__________________PLUS MINUS ARRAY
// function plusMinus(arr) {
//   // Write your code here
//   //CONSTRAINTS:
//   //arr.length is greater than 0 and smaller or equal to 100.
//   //the numbers passed in the array can be -100 to 100.
//   //create variables to store how many negative numbers, 0 and positive numbers are in the array.
//   let negatives=0;
//   let positives=0;
//   let zeros= 0;
//   //the arr.length will tell me the total of elements.
//   let total=arr.length;
//   for(i=0; i<arr.length; i++){
  
//     if(arr[i]<0){
//       negatives++
//     } else if (arr[i]>0) {
//       positives++
//     } else {zeros++}
//   }
//   //console.log(numberofelement/total)
//  console.log(negatives/total.toPrecision(6))
//  console.log(positives/total.toPrecision(6))
//  console.log(zeros/total.toPrecision(6))

// }

// plusMinus([-4, 3, -9, 0, 4, 1])

// function miniMaxSum(arr) {
//   // Write your code here
//   //variables to store the sum
//   let minSum=0
//   let maxSum=0
//   //find the highest number and sum the rest

//   let maxNumber= 0
//   let minNumber= arr[0]

  
  

// //Find the highest number.
//   arr.map((integer)=> {
//     maxNumber= Math.max(maxNumber, integer)
//   })
//   //Find the index of the maxNumber
//   const maxIndex= arr.indexOf(maxNumber)

// //Add the numbers that are not at maxNumber's index.
//   arr.map((integer, index)=> {
//     if (index!== maxIndex){
//       minSum+= integer
//     }
//   })

//   //find the lower number and sum the rest
//   arr.map((integer)=> {
//     minNumber= Math.min(minNumber, integer)
//   })
//   const minIndex= arr.indexOf(minNumber)
//   arr.map((integer, index)=> {
//     if(index!== minIndex){
//       maxSum+= integer
//     }
//   })
 
//   console.log(minSum, maxSum)
  
// }

function timeConversion(s) {
  // Write your code here

//turn the string into an array
//split the string ":"
const hourArray= s.split(":")
console.log(hourArray)
//remove AM/PM from the array and store it in the previous variable.
//create a variable to store AM/PM
const lastElement= hourArray.slice(-1)
let amPm= lastElement[0].split("").slice(2).join("")
console.log(amPm)
//store the 1rst element of the array in an "hours" variable, parsed to number.
//same with min and secs
let hour= parseInt(hourArray[0]).toFixed()
let min= parseInt(hourArray[1]).toFixed()
let secs= parseInt(hourArray[2].split("").splice(0, 2).join("")).toFixed()
console.log(hour)

//If the hour is 12 && AM, hour===12.
if(hour===12 && amPm==="AM"){
  hour="00"
  //If hour is 12 && PM, hour === 00
} else if(hour===12 && amPm==="PM"){
  hour=12
  //else, hour+=12
} else if(hour!==12 & amPm==="PM"){
  hour+12
}

if (hour<10){
  hour = 0 + hour
  console.log(hour)
}

if (min<10){
  min = 0 +min
  console.log(min)
}

if (secs<10){
  secs = 0 + secs
  console.log(secs)
}


//return string with hour:min:secs
return `${hour}:${min}:${secs}`
}

console.log(timeConversion("07:05:45PM"))