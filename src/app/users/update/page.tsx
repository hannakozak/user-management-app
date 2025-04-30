'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import UserForm from '@/components/UserForm';
import { User } from '@/app/types/User';

export default function UpdateUserPage() {
	const router = useRouter();
	const [user, setUser] = useState<Partial<User> | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const storedUser = localStorage.getItem('userToUpdate');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		} else {
			alert('User data not found.');
		}
	}, []);

	async function handleUpdate(updatedUser: Partial<User>) {
		setLoading(true);

		const response = await fetch(`/api/users/update`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedUser),
		});

		if (response.ok) {
			router.push('/users');
		} else {
			const error = await response.json();
			alert(error.message || 'Failed to update user');
		}

		setLoading(false);
	}

	return (
		<>
			<h1 className="flex flex-col items-center justify-center w-full text-xl bg-green-700 text-white font-bold h-16 ">
				Update User
			</h1>
			<UserForm onSubmit={handleUpdate} defaultValues={user} />
			{loading && <div>Updating...</div>}
		</>
	);
}
