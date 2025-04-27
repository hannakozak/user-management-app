'use client';

import { User } from '@/app/types/User';
import UserForm from '@/components/UserForm';
import { useRouter } from 'next/navigation';

export default function CreateUserPage() {
	const router = useRouter();

	const handleCreate = async (data: Partial<User>) => {
		const response = await fetch('/api/users/create', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		if (response.ok) {
			router.push('/users');
		} else {
			alert('Failed to create user.');
		}
	};

	return (
		<div className="p-8">
			<h1 className="text-2xl text-center font-bold mb-6">Create New User</h1>
			<UserForm onSubmit={handleCreate} />
		</div>
	);
}
