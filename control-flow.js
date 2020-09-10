// keyword () {}

// let num = -6

// if (num > 0) {
//   console.log('Phoenix is the best!')
// } else if (num < -5 && num > -8) {
//   console.log("That's a negative my friend")
// } else if (num > -10) {
//   console.log("It's really cold out!")
// } else {
//   console.log('The number is larger than 0')
// }

// const favoritePet = 'cat';

// if (favoritePet === 'dog') {
//   console.log('Achoo!!! Im allergic to dogs.');
// } else if (favoritePet === 'cat') {
//   console.log('Yeah!! Cats are the best.');
// } else {
//   console.log(`Please don't tell me you own a ferret`);
// }

// Independant Practice

// const yourMoney = 200
// const catPrice = 100

// if (yourMoney === catPrice) {
//   console.log("You have just enough to buy a cat!")
// } else if (yourMoney > catPrice) {
//   console.log( "You can buy a cat and will have dollars left over")
// } else {
//   console.log("You cannot buy a cat. You need more dollars :(")
// }

// Ternary Operator

// (conditional) ? ifTrue : ifFalse

let age = 22

// let allowed

// if (age > 18) {
//   allowed = "Yes!"
// } else {
//   allowed = "No!"
// }

// console.log(allowed)

// let allowed = (age > 18) ? "Yes!" : "No!"

// console.log(allowed)

// Switch Statements

// const food = "watermelon"

// switch (food) {
//   case "pineapple":
//     console.log("Feeling tropical")
//     break;
//   case "kiwi":
//     console.log("I love New Zealand")
//     break;
//   case "apple":
//     console.log("Apple a day keeps the doctor away")
//     break;
//   case "watermelon":
//   case "Watermelon":
//     console.log("I love summer")
//     break;
//   default:
//     console.log("Put the durian down!")
// }

// Independant Practice

// let n = 6

// switch (n) {
//   case 1:
//     console.log(`${n} is actually not prime!`)
//     break;
//   case 2:
//     console.log(`${n} is the smallest prime!`)
//     break;
//   case 3:
//   case 5:
//   case 7:
//     console.log(`${n} is Prime!`)
//     break;
//   case 4:
//   case 6:
//   case 8:
//   case 9:
//     console.log(`${n} is not Prime`)
//     break;
//   default:
//     console.log(`Idk if ${n} is prime. google it, ask yourself, ask your friend.`)
// }


// While Loops

// let num = 10
// console.log(num)

// while (num >= 0) {
//   console.log(`The number is now ${num}`)
//   // num--
//   if (num === 7) {
//     console.log("The number is now 7") 
//     break;
//     }
  
// }

// let n = 0
// while (n < 50) {
//   console.log(`${n} is ${n % 2 ? 'odd' : 'even'}`)
//   n++
// }

// For Loop

// intial value; test condition; final expression
// for (let i = 0; i =< 10; i++) {
//   // console.log(i)
//   if (i % 2) {
//     console.log(`${i} is odd`)
//   }
// }

// intial value;
// let init = 0
// // test condition;
// while (init < 11) {
// // final expression
//   init++
// }

// const food = ['tacos', 'burritos', 'pizza', 'soup', 'pasta']
// console.log(food.length) // length = 5

// for (let i = 0; i < food.length; i++) {
//   // console.log(`This is the index: ${i}, This is my value: ${food[i]}`)
//   console.log(food[i])
//   console.log(`This is the index ${i}`)
// }

// food.forEach((item, index) => console.log(`This is item: ${item}, this is index: ${index}`)) 

// let i = 0 

// while (i < food.length) {
//   console.log(`I like this food: ${food[i]}`)
//   i++
// }

const wizards = [
  {name: "Harry Potter", house: "Gryffindor"}, 
  {name: "Lord Voldomort", house: "Slytherin"}, 
  {name: "Cedric Diggory", house: "Hufflepuff"},
  {name: "Luna Lovegood", house: "Ravenclaw"},  
  {name: "Albus Dumbledor", house: "Gryffindor"}, 
  {name: "Merlin", house: "Slytherin"}, 
  {name: "Pomona Sprout", house: "Hufflepuff"}, 
  {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
  {name: "Ron Weasley", house: "Gryffindor"}, 
  {name: "Severus Snape", house: "Slytherin"}, 
  {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
  {name: "Padma Patil", house: "Ravenclaw"}, 
  {name: "Hermoine Granger", house: "Gryffindor"} 
]
 

// for (let i = 0; i < wizards.length; i++) {
//   if (wizards[i].house === "Gryffindor") {
//     console.log(`Welcome to the party ${wizards[i].name}`)
//   }
//   // console.log(wizards[i].name)
//   // console.log(wizards[i].house)
//   // console.log(`My name is ${wizards[i].name}, I am in house ${wizards[i].house}`)
// }


const food = ['tacos', 'burritos', 'pizza', 'soup', 'pasta']

for (let i = 0; i < food.length; i++) {
  // console.log(food[i])
  switch (food[i]) {
    case 'burritos':
      console.log(`This is my favorite food: ${food[i]}`)
      break;
  }
}

