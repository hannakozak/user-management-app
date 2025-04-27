import { connectToDb } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		const pool = await connectToDb();

		await pool
			.request()
			.input('UserID', data.UserID)
			.input('DisplayName', data.DisplayName)
			.input('Email', data.Email)
			.input('IsOSPAdmin', data.IsOSPAdmin)
			.input('Status', data.Status)
			.input('FunctionalUser', data.FunctionalUser)
			.input('AdminUser', data.AdminUser)
			.input('BlockAccess', data.BlockAccess)
			.input('O365Email', data.O365Email)
			.input('MFA_Mobile', data.MFA_Mobile)
			.input('ColourMode', data.ColourMode)
			.input('HierarchyMaintenance', data.HierarchyMaintenance)
			.execute('dbo.AddUser');

		return NextResponse.json({ success: true });
	} catch (err: unknown) {
		return NextResponse.json(
			{
				success: false,
				error: err instanceof Error ? err.message : 'An unknown error occurred',
			},
			{ status: 500 }
		);
	}
}
