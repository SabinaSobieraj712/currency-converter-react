import React from 'react'

const picture = require('../img/finance-investment-money-tree.png');
const titleText = "Przelicznik walut";
const pictureDescription = "logo";

export const BoxHead = () => {
	return(
		<div className="currency-box-name">
		<div className="logo"> 
			<img src={picture} alt={pictureDescription} />
		</div>
		<div>
			<h1>{titleText}</h1>
		</div>
	</div>
	)
}