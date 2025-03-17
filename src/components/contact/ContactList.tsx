import { useEffect, useState } from "react";
import { ContactService } from "../../services/ContactService";
import { Contact } from "./types";
import ContactTable from "./ContactTable";
import Pagination from "./Pagination";

const ContactList = ({ setContactCount, selectedContact, setSelectedContact }: {
    setContactCount: (count: number) => void,
    selectedContact: Contact | null,
    setSelectedContact: (contact: Contact | null) => void
}) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        const loadContacts = async () => {
            try {
                const data = await ContactService.getContacts();
                setContacts(data);
                setContactCount(data.length);
            } catch (err) {
                setError("Impossible de récupérer les contacts.");
            } finally {
                setLoading(false);
            }
        };

        loadContacts();
    }, [setContactCount]);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    const totalPages = Math.ceil(contacts.length / itemsPerPage);
    const paginatedContacts = contacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    if (loading) return <p>Chargement des contacts...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="flex flex-col">
            <div className="flex-1 overflow-auto">
                <ContactTable contacts={paginatedContacts} setSelectedContact={setSelectedContact}
                              selectedContact={selectedContact} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};
export default ContactList;