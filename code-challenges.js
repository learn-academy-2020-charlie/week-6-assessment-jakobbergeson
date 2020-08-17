// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const nameOccupation = (array) => {
// assign each object its own variable
      let objectOnly1 = array[0]
// create an array of the value from the key name
      let array1 = objectOnly1.name.split(" ")
// capitolize the first letter of each index and then join into a string
      let capitalized1 = array1.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }).join(" ")
// repeat the steps above
      let objectOnly2 = array[1]
      let array2 = objectOnly2.name.split(" ")
      let capitalized2 = array2.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }).join(" ")
// repeat the steps above
      let objectOnly3 = array[2]
      let array3 = objectOnly3.name.split(" ")
      let capitalized3 = array3.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }).join(" ")
// use string interpolation to reach desired output
      return `${capitalized1} is a ${objectOnly1.occupation}. ${capitalized2} is a ${objectOnly2.occupation}. ${capitalized3} is a ${objectOnly3.occupation}.`

}
console.log(nameOccupation(people))




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remainder = (array) => {
// Use for loop to push only the numbers into an empty array
  var numsOnly = []
  for (let index = 0; index < array.length; index++) {
    if (typeof(array[index]) === 'number')
       numsOnly.push(array[index])
    }
// use a map to iterate through the array and then return an array with remainder of the numbers when divided by 3
  return numsOnly.map(value => {
    return value % 3
  })

}
console.log(remainder(testingArray1))
console.log(remainder(testingArray2))




// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const noSamePlease = (array1, array2) => {
// concat the 2 arrays into one
  let oneArray = array1.concat(array2)
// use filter and indexOf to only return the values that match the first index in which they occurred
  return oneArray.filter((value, index) => {
    return oneArray.indexOf(value) === index
  })
}
console.log(noSamePlease(testingArray3, testingArray4))