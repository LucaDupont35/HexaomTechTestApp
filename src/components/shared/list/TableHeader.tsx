import { Column } from './List';

interface TableHeaderProps<T> {
    columns: Column<T>[];
}

const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => (
    <thead>
    <tr className="text-black text-left border-b border-gray-300">
        {columns.map((col) => (
            <th key={String(col.key)} className="p-3 font-medium text-left" style={{ width: col.width }}>
                {col.label}
            </th>
        ))}
    </tr>
    </thead>
);

export default TableHeader;