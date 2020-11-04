import React from 'react';
import './MovieCard.css';
import defaultPoster from '../assets/default-poster.jpg'
import useCast from '../hooks/useCast.js';
import useTrailer from '../hooks/useTrailer.js'

const MovieCard = ({poster, title, synopsis, year, id, rating}) => {
	const [stars, director] = useCast(id);
	const [trailerKey] = useTrailer(id);

	return  (
		<div className="item">
			<div className="ui grid">
				<div className="ui row">
					<div id="poster" className="three wide column">
						<img 
							className="ui image"
							src={poster ? `http://image.tmdb.org/t/p/original/${poster}` : defaultPoster }
							alt={title}
						/>
					</div>
					<div className="thirteen wide column">
						<div className="content">
							<h2 className="header">{title} {year ?  `(${year})` : ''}</h2>
							<p className="description">{synopsis}</p>
							<p className="description">{stars ? `Starring: ${stars}` : ''}</p>
							<p className="description">{director ? `Directed by: ${director}` : ''}</p>
							<p className="description">{rating > 0 ? `User Score: ${rating*10}%` : ''}</p>
							{trailerKey ? <p className="description" style={{margin: '0'}}><strong>Trailer</strong></p> : ''}
							{trailerKey ? <iframe title="trailer" className="description" src={`https://www.youtube.com/embed/${trailerKey}`}/> : ''}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default MovieCard;




