import { User } from '@/app/types/User';
import clsx from 'clsx';
import { UserPen, UserX } from 'lucide-react';
import React from 'react';

interface UsersTableProps {
	users: User[];
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
	return (
		<div className="overflow-x-auto">
			<table className="hidden min-w-full md:table">
				<thead className="text-left text-sm text-gray-500">
					<tr className="[&>th]:px-4 [&>th]:py-2">
						<th>User ID</th>
						<th>Display Name</th>
						<th>Email</th>
						<th>MFA_Mobile</th>
						<th>IS OSP Admin</th>
						<th>Status</th>
						<th className="w-3">Block Access</th>
						<th className="w-3">Functional User</th>
						<th className="w-3">Color Mode</th>
						<th className="w-3">Hierarchy Maintenance</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr
							key={user.UserID}
							className="w-full border-b py-3 text-sm border-gray-300 hover:bg-gray-100"
						>
							<td className="py-3 pl-6 pr-3">{user.UserID}</td>
							<td className="py-3 pl-6 pr-3">{user.DisplayName}</td>
							<td className="py-3 pl-6 pr-3">{user.Email}</td>
							<td className="py-3 pl-6 pr-3">{user.MFA_Mobile}</td>
							<td className="py-3 pl-6 pr-3">
								{user.IsOSPAdmin ? 'Admin' : 'User'}
							</td>
							<td className="py-3 pl-6 pr-3 font-bold">
								<span
									className={clsx({
										'text-green-700': user.Status === 'Active',
										'text-gray-500': user.Status === 'Inactive',
										'text-green-500': user.Status === 'Testing',
									})}
								>
									{user.Status}
								</span>
							</td>
							<td className="py-3 pl-6 pr-3">{user.BlockAccess}</td>
							<td className="py-3 pl-6 pr-3">{user.FunctionalUser}</td>
							<td className="py-3 pl-6 pr-3">{user.ColourMode}</td>
							<td className="py-3 pl-6 pr-3">
								{user.HierarchyMaintenance ? '+' : '-'}
							</td>
							<td className="flex gap-3 py-3 pl-6 pr-3">
								<UserPen className="cursor-pointer text-gray-500 hover:text-gray-700" />
								<UserX className="cursor-pointer text-gray-500 hover:text-gray-700" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="md:hidden flex flex-col gap-4 p-2 text-sm text-gray-500">
				{users.map((user) => (
					<div
						key={user.UserID}
						className="mb-2 w-full rounded-md p-4 border-b border-gray-200 shadow-sm"
					>
						<div className="mb-2 w-full flex justify-between">
							<div>
								<h2 className="text-gray-800 font-bold">{user.DisplayName}</h2>
								<p
									className={`${
										user.Status === 'Inactive'
											? 'text-gray-500'
											: 'text-green-500'
									}`}
								>
									{user.Status}
								</p>

								<p>{user.IsOSPAdmin ? 'Admin' : 'User'}</p>
							</div>
							<div className="flex justify-end gap-2">
								<UserPen className="cursor-pointer text-gray-500 hover:text-gray-700" />
								<UserX className="cursor-pointer text-gray-500 hover:text-gray-700" />
							</div>
						</div>
						<div className="flex flex-col w-full pt-4">
							<div>{user.Email}</div>
							<div>{user.MFA_Mobile}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
