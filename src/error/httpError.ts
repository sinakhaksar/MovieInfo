import { AppError } from "./appError.js";

export class badReqError extends AppError {
	constructor(message: string) {
		super(message, 400);
	}
}

export class notFoundError extends AppError {
	constructor(message: string = "Not Found") {
		super(message, 404);
	}
}

export class InternalServerError extends AppError {
	constructor(message: string = "Internal Server Error") {
		super(message, 500);
	}
}
