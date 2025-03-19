import React from 'react';
import { Column } from './List';

interface TableRowProps<T> {
    item: T;
    columns: Column<T>[];
    isSelected: boolean;
    onSelect: () => void;
}

const TableRow = <T,>({ item, columns, isSelected, onSelect }: TableRowProps<T>) => (
    <tr
        className={`border-b border-gray-300 hover:bg-blue-50 cursor-pointer ${isSelected ? 'bg-blue-100' : ''}`}
        onClick={onSelect}
    >
        {columns.map((col) => (
            <td key={String(col.key)} className="p-3 text-left">
                {item[col.key] as React.ReactNode}
            </td>
        ))}
    </tr>
);

export default TableRow;
