import express from "express";
import "dotenv/config";

import sequelize from "./database.js";

const app = express();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
	try {
		await sequelize.authenticate();
		console.log("DB connected: ✅");
		app.listen(PORT, () => {
			console.log(`server connected: ✅`);
		});
	} catch (err) {
		console.log("ERROR 🟥: ", err);
	}
};

startServer();
