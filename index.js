// Code your solutions in this file
function printBadges(array){
  for(let i=0;i<=array.length-1;i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails(){
let tailCount=0
  while(Math.random()>=0.5){
    tailCount++
  }
  return `You got ${tailCount} tails in a row!`
}
