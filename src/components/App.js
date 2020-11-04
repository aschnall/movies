import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';

const App = () => {
	const [movies, search, resultsExist] = useMovies();
	
	return (
		<div>
			<div className="ui container">
				<SearchBar onSubmit={search} />
			</div>
			{resultsExist ? 
				<MovieList movies={movies}/> : 
				<div style={{margin: '20px 0', textAlign: 'center', fontSize: '24px'}}>No results found</div>
			}
		</div>

	);

}

export default App;