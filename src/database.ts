import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	process.env.DBNAME as string,
	process.env.DBUSERNAME as string,
	process.env.DBPASSWORD as string,
	{ dialect: "mysql", logging: false },
);

export default sequelize;
