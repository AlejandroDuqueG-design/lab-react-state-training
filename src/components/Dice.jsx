import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png"
import diceTwo from "../assets/images/dice2.png"
import diceThree from "../assets/images/dice3.png"
import diceFour from "../assets/images/dice4.png"
import diceFive from "../assets/images/dice5.png"
import diceSix from "../assets/images/dice6.png"

function Dice() {
const [randomDiceValue, setRandomDiceValue]=useState(diceEmpty)

const handleDisplay = ()=>{
    setRandomDiceValue(diceEmpty);
    setTimeout(()=>{
        const randomDice = Math.floor(Math.random()*6)+1
        setRandomDiceValue(randomDice);
    },1000)
}

  return (
    <div>
<button onClick={randomDice}>Roll Dice</button>


    </div>
  )
}

export default Dice