import { useState } from 'react'
import './App.css'
import { ValueToCalculateInput } from './components/ValueToCalculateInput'
import { CurrencyBox } from './components/CurrencyBox'
import { CalculateButton } from './components/CalculateButton'
import { BoxHead } from './components/BoxHead'

const outputCurrencyText = "PLN";
const fixedPositionNumber = 2;

function App() {

	const [userInput, setUserInput] = useState('')
	const [userSelect, setUserSelect] = useState('')
	const [result, setResult] = useState(0)
	
	const submitAction = e => {
		e.preventDefault()
		let answer = userInput * userSelect
		setResult(answer.toFixed(fixedPositionNumber))
	}

  return (
		<main className='currency-box'>
			<div className="currency-box-app">
				<BoxHead/>
				<div className='currency-box-container'>
					<form onSubmit={submitAction}>
						<ValueToCalculateInput userInput={userInput} setUserInput={setUserInput} />
						<CurrencyBox userSelect={userSelect} setUserSelect={setUserSelect} />
						<CalculateButton /> 
					</form>
				</div>
				<span className='calculation-result'>{result} {outputCurrencyText}</span>
			</div>
		</main>
  );
}

export default App;
