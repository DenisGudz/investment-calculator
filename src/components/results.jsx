import { calculateInvestmentResults } from "../util/investment"

function Results(props) {
    const resultData = calculateInvestmentResults(props.input)

    console.log(resultData)

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>investment Value</th>
                    <th>interest (Year)</th>
                </tr>
            </thead>
        </table>
    )
}





export default Results