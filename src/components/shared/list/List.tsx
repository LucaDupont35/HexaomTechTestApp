import Table from "./Table.tsx";
import Pagination from "./Pagination.tsx";


interface ListProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (item: T) => string | number;
    selectedItem: T | null;
    onSelectItem: (item: T) => void;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    setItemsPerPage: (value: number) => void;
    setCurrentPage: (page: number) => void;
}

export interface Column<T> {
    key: keyof T;
    label: string;
    width?: string;
}

const List = <T,>({
                      data,
                      columns,
                      keyExtractor,
                      selectedItem,
                      onSelectItem,
                      currentPage,
                      itemsPerPage,
                      totalItems,
                      setItemsPerPage,
                      setCurrentPage,
                  }: ListProps<T>) => (
    <div className="flex flex-col">
        <div className="overflow-auto">
            <Table
                data={data}
                columns={columns}
                keyExtractor={keyExtractor}
                selectedItem={selectedItem}
                onSelectItem={onSelectItem}
            />
        </div>
        <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalItems / itemsPerPage)}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            onPageChange={setCurrentPage}
        />
    </div>
);

export default List;
