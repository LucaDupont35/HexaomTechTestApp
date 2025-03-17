import {columns} from "./columns.ts";
import {Contact} from "./types.ts";

const ContactTableRow = ({ contact, isSelected, onSelect }: {
    contact: Contact,
    isSelected: boolean,
    onSelect: () => void
}) => (
    <tr
        className={`border-b border-gray-300 hover:bg-blue-50 cursor-pointer ${isSelected ? 'bg-blue-100' : ''}`}
        onClick={onSelect}
    >
        {columns.map((col) => (
            <td key={col.key} className="p-3 text-left">{(contact as never)[col.key]}</td>
        ))}
    </tr>
);

export default ContactTableRow;