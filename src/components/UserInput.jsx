import { useState } from "react";


function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn:6,
        duration:10
    })


    function handelChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }


    return(
        <section id="user-input">
            <div className="input-gorup">
                <p>
                    <label htmlFor="">Initial Investment`</label>
                    <input type="text" value={userInput.initialInvestment} required onChange={(event) => handelChange("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="text" required value={userInput.annualInvestment}  onChange={(event) => handelChange("annualInvestment", event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="text" required  value={userInput.expectedReturn}  onChange={(event) => handelChange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="text" required value={userInput.duration}  onChange={(event) => handelChange("duration", event.target.value)}/>
                </p>
            </div>
        </section>
    )
}




export default UserInput