const urlOfCurrencies = 'http://api.nbp.pl/api/exchangerates/tables/A/'

const fetchCurrencies = fetch(urlOfCurrencies)
	.then(response => response.json())
	.catch(err => console.log(err))

export { fetchCurrencies }