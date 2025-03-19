import { Column } from './List';
import TableRow from "./TableTow.tsx";
import TableHeader from "./TableHeader.tsx";

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (item: T) => string | number;
    selectedItem: T | null;
    onSelectItem: (item: T) => void;
}

const Table = <T,>({
                       data,
                       columns,
                       keyExtractor,
                       selectedItem,
                       onSelectItem,
                   }: TableProps<T>) => (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden table-fixed">
        <TableHeader columns={columns} />
        <tbody>
        {data.map((item) => (
            <TableRow
                key={keyExtractor(item)}
                item={item}
                columns={columns}
                isSelected={selectedItem ? keyExtractor(selectedItem) === keyExtractor(item) : false}
                onSelect={() => onSelectItem(item)}
            />
        ))}
        </tbody>
    </table>
);

export default Table;