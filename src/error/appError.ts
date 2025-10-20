export class AppError extends Error {
	isOperational: boolean;
	statusCode: number;

	constructor(message: string, statusCode: number, isOperational: boolean = true) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		Error.captureStackTrace(this, this.constructor);
	}
}
