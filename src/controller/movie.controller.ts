import type { NextFunction, Request, Response } from "express";

const movieFinder = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { title } = req.params;

		return res.status(200).json({
			msg: "ok",
			title,
		});
	} catch (err) {
		next(err);
	}
};

export default movieFinder;
