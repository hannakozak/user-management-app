import { connectToDb } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');

		if (!id) {
			return Response.json(
				{ success: false, error: 'User ID is required' },
				{ status: 400 }
			);
		}

		const pool = await connectToDb();
		await pool.request().input('UserID', id).execute('dbo.DeleteUser');

		return Response.json({
			success: true,
			message: 'User deleted successfully',
		});
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
