import { CustomError } from "./custom-error";
export class DatabaseConnectionError extends CustomError {
	reason = "Error Connecting to database.";
	statusCode = 500;
	constructor() {
		super("Error connecting do DB.");
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}
	serializeErrors() {
		return [
			{
				message: this.reason,
			},
		];
	}
}
