interface FilterSelectProps {
	label: string;
	id: string;
	value: string;
	options: { value: string; label: string }[];
	onChange: (value: string) => void;
}

export const FilterSelect = ({
	label,
	id,
	value,
	options,
	onChange,
}: FilterSelectProps) => (
	<div className="flex flex-col">
		<label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
			{label}
		</label>
		<select
			id={id}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:ring-green-400"
		>
			{options.map((opt) => (
				<option key={opt.value} value={opt.value}>
					{opt.label}
				</option>
			))}
		</select>
	</div>
);
