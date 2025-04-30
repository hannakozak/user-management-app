'use client';

import { useEffect, useState } from 'react';
import { UsersTable } from '@/components/UsersTable';
import { User } from '../types/User';
import { useRouter } from 'next/navigation';

export default function UsersPage() {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

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

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleDelete = async (userId: number) => {
		const confirmed = confirm('Are you sure you want to delete this user?');
		if (!confirmed) return;

		const res = await fetch(`/api/users/delete?id=${userId}`, {
			method: 'DELETE',
		});

		if (res.ok) {
			alert('User deleted');
			fetchUsers();
		} else {
			const error = await res.json();
			alert(error.message || 'Delete failed');
		}
	};

	return (
		<main className="flex flex-col items-center">
			<div className="flex items-center justify-between w-full bg-green-700 h-16">
				<h1 className="text-2xl font-bold px-6 text-white">User Management</h1>
				<button
					onClick={() => router.push('/users/create')}
					className="border text-white px-10  mx-6 py-2 rounded hover:bg-green-800  transition"
				>
					Add New User
				</button>
			</div>

			{loading && <p>Loading users...</p>}
			{error && <p className="text-red-500">{error}</p>}
			{users && <UsersTable users={users} handleDelete={handleDelete} />}
		</main>
	);
}
