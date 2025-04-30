'use client';

import React from 'react';
import { FilterSelect } from './FilterSelect';

interface UserFiltersProps {
	filters: {
		status: string;
		isAdmin: string;
		blockAccess: string;
		functionalUser: string;
		hierarchyMaintenance: string;
	};
	onChange: (filters: UserFiltersProps['filters']) => void;
}

export const UserFilters = ({ filters, onChange }: UserFiltersProps) => {
	return (
		<div className="bg-white p-6 max-w-5xl mx-auto mb-6">
			<h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
				Filter Users
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<FilterSelect
					label="Status"
					id="status"
					value={filters.status}
					options={[
						{ value: '', label: 'All Statuses' },
						{ value: 'Active', label: 'Active' },
						{ value: 'Inactive', label: 'Inactive' },
						{ value: 'Testing', label: 'Testing' },
					]}
					onChange={(value) => onChange({ ...filters, status: value })}
				/>
				<FilterSelect
					label="User Type"
					id="isAdmin"
					value={filters.isAdmin}
					options={[
						{ value: '', label: 'All Users' },
						{ value: 'Admin', label: 'Admin' },
						{ value: 'User', label: 'User' },
					]}
					onChange={(value) => onChange({ ...filters, isAdmin: value })}
				/>

				<FilterSelect
					label="Block Access"
					id="blockAccess"
					value={filters.blockAccess}
					options={[
						{ value: '', label: 'All' },
						{ value: 'true', label: 'Yes' },
						{ value: 'false', label: 'No' },
					]}
					onChange={(value) => onChange({ ...filters, blockAccess: value })}
				/>

				<FilterSelect
					label="Functional User"
					id="functionalUser"
					value={filters.functionalUser}
					options={[
						{ value: '', label: 'All' },
						{ value: '0', label: '0' },
						{ value: '1', label: '1' },
						{ value: '2', label: '2' },
						{ value: '3', label: '3' },
					]}
					onChange={(value) => onChange({ ...filters, functionalUser: value })}
				/>

				<FilterSelect
					label="Hierarchy Maintenance"
					id="hierarchyMaintenance"
					value={filters.hierarchyMaintenance}
					options={[
						{ value: '', label: 'All' },
						{ value: 'true', label: 'Yes' },
						{ value: 'false', label: 'No' },
					]}
					onChange={(value) =>
						onChange({ ...filters, hierarchyMaintenance: value })
					}
				/>
			</div>
		</div>
	);
};
