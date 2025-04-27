'use client';

import { User } from '@/app/types/User';
import { useForm } from 'react-hook-form';

interface UserFormProps {
	onSubmit: (data: Partial<User>) => void;
	defaultValues?: Partial<User>;
}

export default function UserForm({ onSubmit, defaultValues }: UserFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<User>>({
		defaultValues,
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 max-w-2xl mx-auto p-6 shadow-xl rounded-xl"
		>
			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">Display Name</label>
				<input
					{...register('DisplayName', { required: 'Display Name is required' })}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				/>
				{errors.DisplayName && (
					<p className="text-red-500 text-xs">{errors.DisplayName.message}</p>
				)}
			</div>

			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">Email</label>
				<input
					{...register('Email', {
						required: 'Email is required',
						pattern: {
							value: /^\S+@\S+$/i,
							message: 'Invalid email format',
						},
					})}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				/>
				{errors.Email && (
					<p className="text-red-500 text-xs">{errors.Email.message}</p>
				)}
			</div>

			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">Status</label>
				<select
					{...register('Status', { required: true })}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				>
					<option value="Active">Active</option>
					<option value="Inactive">Inactive</option>
					<option value="Testing">Testing</option>
				</select>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="flex items-center space-x-2">
					<input type="checkbox" {...register('IsOSPAdmin')} />
					<label className="text-sm">Is Admin?</label>
				</div>
				<div className="flex items-center space-x-2">
					<input type="checkbox" {...register('BlockAccess')} />
					<label className="text-sm">Block Access?</label>
				</div>
				<div className="flex items-center space-x-2">
					<input type="checkbox" {...register('HierarchyMaintenance')} />
					<label className="text-sm">Hierarchy Maintenance</label>
				</div>
			</div>

			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">Colour Mode</label>
				<select
					{...register('ColourMode', { required: 'ColourMode is required' })}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				>
					<option value="D">Dark</option>
					<option value="L">Light</option>
				</select>
			</div>

			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">Functional User</label>
				<select
					{...register('FunctionalUser', {
						required: 'Please select a Functional User level',
					})}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				>
					<option value="">Select Functional User Level</option>
					<option value="0">0 - No Access</option>
					<option value="1">1 - Basic Access</option>
					<option value="2">2 - Intermediate Access</option>
					<option value="3">3 - Advanced Access</option>
					<option value="4">4 - Full Access</option>
				</select>
				{errors.FunctionalUser && (
					<p className="text-red-500 text-xs">
						{errors.FunctionalUser.message}
					</p>
				)}
			</div>

			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">O365 Email</label>
				<input
					type="email"
					{...register('O365Email', {
						required: 'O365 Email is required',
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
							message: 'Please enter a valid email address',
						},
					})}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				/>
				{errors.O365Email && (
					<p className="text-red-500 text-xs">{errors.O365Email.message}</p>
				)}
			</div>

			<div className="flex flex-col space-y-1">
				<label className="text-sm font-semibold">MFA Mobile</label>
				<input
					type="text"
					{...register('MFA_Mobile', {
						required: 'MFA Mobile is required',
						pattern: {
							value: /^[0-9]{10}$/,
							message: 'Please enter a valid 10-digit phone number',
						},
					})}
					className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
				/>
				{errors.MFA_Mobile && (
					<p className="text-red-500 text-xs">{errors.MFA_Mobile.message}</p>
				)}
			</div>

			<div className="my-10">
				<button
					type="submit"
					className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-200"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
