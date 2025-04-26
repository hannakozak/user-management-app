import sql, { ConnectionPool } from 'mssql';

const config: sql.config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER!,
	database: process.env.DB_NAME,
	options: {
		encrypt: true,
		enableArithAbort: true,
	},
};

export async function connectToDb(): Promise<ConnectionPool> {
	try {
		const pool = await sql.connect(config);
		return pool;
	} catch (err) {
		console.error('Database connection failed:', err);
		throw err;
	}
}
