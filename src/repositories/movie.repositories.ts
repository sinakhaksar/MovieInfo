import Movie from "../entites/movie.js";

export const MovieRepository = {
	async findMovieByTitle(title: string) {
		const movie = await Movie.findOne({ where: { title } });
		return movie;
	},
	async createMovie(data: any) {
		return await Movie.create(data);
	},
};
