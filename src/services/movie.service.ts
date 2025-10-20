import { notFoundError } from "../error/httpError.js";
import { MovieRepository } from "../repositories/movie.repositories.js";

export const movieService = {
	async MovieFinder(title: string) {
		const movie = await MovieRepository.findMovieByTitle(title);
		if (!movie) {
			// call the omdbapi
			const apiMovie = await omdbapi(title);
			if (!apiMovie) throw new notFoundError("movie not Found");

			// it makes it simpler for repository
			const data: any = {
				title: apiMovie.Title,
				year: Number(apiMovie.Year),
				director: apiMovie.Director,
				plot: apiMovie.Plot,
				imdbRating: Number(apiMovie.imdbRating),
			};
			await MovieRepository.createMovie(data);
			data.cached = false;

			return data;
		}
		movie.dataValues.cached = true;
		delete movie.dataValues.id;
		delete movie.dataValues.createdAt;
		delete movie.dataValues.updatedAt;
		return movie.dataValues;
	},
};

const omdbapi = async (title: string) => {
	const data = await fetch(
		`http://www.omdbapi.com/?apikey=${process.env.apikey}&t=${title}`,
	);

	// Parse the body stream into JSON
	const movie = await data.json();

	if (movie.Response === "False") return null;
	else {
		return movie;
	}
};
