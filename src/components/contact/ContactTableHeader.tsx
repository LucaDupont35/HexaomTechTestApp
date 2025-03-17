import { columns } from "./columns";
const ContactTableHeader = () => (
    <thead>
    <tr className=" text-black text-left border-b border-gray-300">
        {columns.map((col) => (
            <th key={col.key} className="p-3 font-medium text-left" style={{ width: col.width }}>{col.label}</th>
        ))}
    </tr>
    </thead>
);
export default ContactTableHeader;