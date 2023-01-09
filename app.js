const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 



possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) => {
   userChoice= e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoise()
}))

function generateComputerChoise(){
   const randomNumber = Math.random() * 3 + 1//or You can use possibleChoices.length
  if (randomNumber ===1){
   computerChoice ='rock'
  }
  if (randomNumber ===2){
   computerChoice ='scissors'
  }
  if (randomNumber ===3){
   computerChoice ='paper'
  }
}