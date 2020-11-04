import { useState, useEffect } from 'react';
import { KEY } from '../apis/tmdb.js';


const useCast = id => {
	const [stars, setStars] = useState('');
	const [director, setDirector] = useState('');

	useEffect(() => {
		castSearch(id);
	}, [id])

	const castSearch = async id => {
		let credits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`);
		credits = await credits.json();
		let stars = credits.cast.slice(0,4);
		stars = stars.map(obj => obj.name).join(', ');
		let director = {};
		for (let i = 0; i < credits.crew.length; i++) {
			if (credits.crew[i].job==='Director' && credits.crew[i].department==='Directing') {
				director=credits.crew[i];
				break;
			}
		}
		setStars(stars);
		setDirector(director.name);
	}
	return [stars, director];
}

export default useCast;