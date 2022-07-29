import React, { useEffect, useState } from 'react'
import { fetchCurrencies } from '../components/CurrencySupplier'

const selectionText = "Wybierz walutę:";

function optionBox(currency) {
    return (
        <option key={currency.code} value={currency.mid}>
            {currency.code}
        </option>
    )
}


export const CurrencyBox = ({ userSelect, setUserSelect }) => {
	const [currenciesList, setCurrenciesList] = useState([])

	useEffect(() => {
		fetchCurrencies.then(data => {
			setCurrenciesList(data[0].rates)
		})
	}, [])

	return (
		<select id='select-list' value={userSelect} onChange={e => setUserSelect(e.target.value)}>
			<option>{selectionText}</option>
			{currenciesList.map(currency => (
                optionBox(currency)
			))}
		</select>
	)
}