import React, { useState } from 'react';


const SearchBar = ({onSubmit}) => {
	const [term, setTerm] = useState('');
	
	const onTermSubmit = event => {
		event.preventDefault();
		onSubmit(term);
	}

	return (
		<form onSubmit={onTermSubmit} className="ui form">
			<div className="field">
				<label>Enter Movie</label>
				<input 
					type="text"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
			</div>
		</form>
	);
}


export default SearchBar;


