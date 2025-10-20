import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`server is running on localhost:${PORT}`);
});
