import { connectToDb } from '@/lib/db';

export async function GET() {
	try {
		const pool = await connectToDb();
		const result = await pool.request().execute('dbo.GetUsers');
		return Response.json(result.recordset);
	} catch (err: unknown) {
		return Response.json(
			{
				success: false,
				error: err instanceof Error ? err.message : 'An unknown error occurred',
			},
			{ status: 500 }
		);
	}
}
