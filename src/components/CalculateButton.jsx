import React from 'react'

const buttonText = "Przelicz";

export const CalculateButton = () => {
	return (
        <input 
            type='submit' 
            value={buttonText} 
            className='submit-btn' 
            id='submit-btn' 
        />)
}