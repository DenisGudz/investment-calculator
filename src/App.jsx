import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from "./components/results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn:6,
    duration:10 
  })

  const inputIsValid = userInput.duration >= 1;


  function handelChange(inputIdentifier, newValue) {
    setUserInput(function (prevUserInput) {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
       }
   })
  }
  
  
  return (
  <>
    <Header/>
    <UserInput onChange={handelChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Please enter a duration grater than zero.</p>}
    {inputIsValid && <Results input={userInput}/>}
  </>
  )
}

export default App
