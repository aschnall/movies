import { useState, useEffect } from 'react';
import { KEY } from '../apis/tmdb.js';

const useTrailer = id => {
		
	const [trailerKey, setTrailerKey] = useState('');
	
	useEffect(() => {
	videoSearch(id);
	}, [id])

	const videoSearch = async id => {
		let video = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`);
		video = await video.json();
		if (video.results[0]) {
		setTrailerKey(video.results[0].key);
		}
	}
	return [trailerKey];
}

export default useTrailer;