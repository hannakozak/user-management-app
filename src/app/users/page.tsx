'use client';

import { useEffect, useState } from 'react';
import { UsersTable } from '@/components/UsersTable';
import { User } from '../types/User';

export default function UsersPage() {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await fetch('/api/users/get');
				if (!res.ok) throw new Error('Failed to fetch users');
				const data = await res.json();
				setUsers(data);
			} catch (err: unknown) {
				setError(err instanceof Error ? err.message : 'Something went wrong');
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return (
		<main className="p-6">
			{loading && <p>Loading users...</p>}
			{error && <p className="text-red-500">{error}</p>}
			{users && <UsersTable users={users} />}
		</main>
	);
}
