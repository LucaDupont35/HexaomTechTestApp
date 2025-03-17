import { Contact } from "./types";
import ContactTableHeader from "./ContactTableHeader.tsx";
import ContactTableRow from "./ContactTableRow.tsx";
const ContactTable = ({ contacts, selectedContact, setSelectedContact }: { contacts: Contact[], selectedContact: number | null, setSelectedContact: (id: number) => void }) => (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden table-fixed">
        <ContactTableHeader/>
        <tbody>
        {contacts.map((contact) => (
            <ContactTableRow
                key={contact.id}
                contact={contact}
                isSelected={selectedContact === contact.id}
                onSelect={() => setSelectedContact(contact.id)}
            />
        ))}
        </tbody>
    </table>
);
export default ContactTable;