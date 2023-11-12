import { useState } from "react";


function UserInput(props) {




    return(
        <section id="user-input">
            <div className="input-gorup">
                <p>
                    <label htmlFor="">Initial Investment`</label>
                    <input type="number" value={props.userInput.initialInvestment} required onChange={(event) => props.onChange("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required value={props.userInput.annualInvestment}  onChange={(event) => props.onChange("annualInvestment", event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required  value={props.userInput.expectedReturn}  onChange={(event) => props.onChange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required value={props.userInput.duration}  onChange={(event) => props.onChange("duration", event.target.value)}/>
                </p>
            </div>
        </section>
    )
}




export default UserInput