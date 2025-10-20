import express from "express";
import "dotenv/config";

import sequelize from "./database.js";
import Movie from "./entites/movie.js";
import movieRouter from "./routes/movie.router.js";
import { errorHandlerMiddleware } from "./middleware/error.middleware.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
	const now = new Date();
	const time =
		`[${String(now.getHours()).padStart(2, "0")}:` +
		`${String(now.getMinutes()).padStart(2, "0")}:` +
		`${String(now.getSeconds()).padStart(2, "0")}:` +
		`${String(now.getMilliseconds()).padStart(3, "0")}]`;

	console.log(time, req.method, req.path);
	next();
});

app.use("/movies", movieRouter);

// Global Error handling for not found Routes
app.use((req, res) => {
	res.status(404).json({
		message: "Route Not Found!",
	});
});

app.use(errorHandlerMiddleware);

const startServer = async () => {
	try {
		await sequelize.authenticate();
		console.log("DB connected: ✅");

		await Movie.sync();

		app.listen(PORT, () => {
			console.log(`server connected: ✅`);
		});
	} catch (err) {
		console.log("ERROR 🟥: ", err);
	}
};

startServer();
