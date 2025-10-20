import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Movie = sequelize.define("Movie", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	title: {
		type: DataTypes.STRING(64),
		primaryKey: true,
	},
	year: {
		type: DataTypes.INTEGER,
	},
	director: {
		type: DataTypes.STRING(64),
	},
	plot: {
		type: DataTypes.TEXT,
	},
	imdbRating: {
		type: DataTypes.FLOAT,
	},
});

export default Movie;
