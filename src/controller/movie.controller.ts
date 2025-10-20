import type { NextFunction, Request, Response } from "express";
import { movieService } from "../services/movie.service.js";

const movieFinder = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { title } = req.params;

		if (!title) return; // to avoid typeError in MovieFinder
		// calling service to do business logic
		const movie = await movieService.MovieFinder(title.trim());

		return res.status(200).json(movie);
	} catch (err) {
		next(err);
	}
};

export default movieFinder;
