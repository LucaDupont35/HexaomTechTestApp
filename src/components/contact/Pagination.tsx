import { paginationOptions } from "./paginationOptions";

const Pagination = ({ currentPage, totalPages, itemsPerPage, setItemsPerPage, onPageChange }: {
    currentPage: number,
    totalPages: number,
    itemsPerPage: number,
    setItemsPerPage: (value: number) => void,
    onPageChange: (page: number) => void
}) => (
    <div className="flex justify-between items-center bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300">
        <div className="flex items-center gap-2">
            <span>Lignes par page:</span>
            <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border p-2 rounded"
            >
                {paginationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
        <span>{(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalPages * itemsPerPage)} sur {totalPages * itemsPerPage}</span>
        <div className="flex gap-2">
            <button
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &lt;
            </button>
            <button
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &gt;
            </button>
        </div>
    </div>
);
export default Pagination;