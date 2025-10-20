import type { Request, Response, NextFunction } from "express";

import { AppError } from "../error/appError.js";

export const errorHandlerMiddleware = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const isOperational = err instanceof AppError && err.isOperational;
	// REAL CRASH OR BUG
	if (!isOperational) console.error("UNEXPECTED ERROR🧨:", err);

	const status: number = isOperational ? err.statusCode : 500;
	const message: string = isOperational ? err.message : "Internal Server Error";

	res.status(status).json({
		message,
		// returning trace in Dev mode
		ERROR: process.env.NODE_ENV === "development" ? err.stack : undefined,
	});
};
