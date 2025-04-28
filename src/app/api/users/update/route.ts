import { connectToDb } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function PUT(req: NextRequest) {
	try {
		const userData = await req.json();

		const pool = await connectToDb();

		await pool
			.request()
			.input('UserID', userData.UserID)
			.input('DisplayName', userData.DisplayName)
			.input('Email', userData.Email)
			.input('Status', userData.Status)
			.input('IsOSPAdmin', userData.IsOSPAdmin)
			.input('BlockAccess', userData.BlockAccess)
			.input('FunctionalUser', userData.FunctionalUser)
			.input('O365Email', userData.O365Email)
			.input('MFA_Mobile', userData.MFA_Mobile)
			.input('ColourMode', userData.ColourMode)
			.input('HierarchyMaintenance', userData.HierarchyMaintenance)
			.execute('dbo.UpdateUser');

		return Response.json({
			success: true,
			message: 'User updated successfully',
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
