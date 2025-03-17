import {Contact} from "./types.ts";
import ContactTableHeader from "./ContactTableHeader.tsx";
import ContactTableRow from "./ContactTableRow.tsx";

const ContactTable = ({ contacts, selectedContact, setSelectedContact }: {
    contacts: Contact[],
    selectedContact: Contact | null,
    setSelectedContact: (contact: Contact) => void
}) => {
    return (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden table-fixed">
            <ContactTableHeader />
            <tbody>
            {contacts.map((contact) => (
                <ContactTableRow
                    key={contact.id}
                    contact={contact}
                    isSelected={selectedContact?.id === contact.id}
                    onSelect={() => setSelectedContact(contact)}
                />
            ))}
            </tbody>
        </table>
    );
};

export default ContactTable;