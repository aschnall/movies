import { useState } from 'react';
import { KEY } from '../apis/tmdb';

const useMovies = () => {
	const [movies, setMovies] = useState([]);
	const [resultsExist, setResultsExist] = useState(true);
	const search = async term => {
		let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${KEY}&language=en-US&page=1&include_adult=false`);
		response = await response.json();
		setMovies(response.results.slice(0,10));
		if (response.results.length === 0) {
			setResultsExist(false);
		} else {
			setResultsExist(true);
		}
	}
	return [movies, search, resultsExist];
}

export default useMovies;