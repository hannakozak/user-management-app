import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold mb-6">Welcome to the Admin Panel</h1>

			<Link
				href="/users"
				className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-800 transition"
			>
				Go to User Management
			</Link>
		</main>
	);
}
