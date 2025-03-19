import { useEffect, useState, useMemo } from "react";
import ContactHeader from "./ContactHeader.tsx";
import ContactDetail from "./ContactDetail.tsx";
import { ContactService } from "../../../services/ContactService.ts";
import ContactFormModal from "./ContactFormModal.tsx";
import {FaMapMarkerAlt, FaPlus} from "react-icons/fa";
import SearchInput from "../../shared/input/SerachInput.tsx";
import List, { Column } from "../../shared/list/List.tsx";
import { Contact } from "../../../models/Contact.ts";
import Button from "../../shared/button/Button.tsx";
import ContactMapModal from "./ContactMapModal.tsx";

const contactColumns: Column<Contact>[] = [
    { key: "lastName", label: "Nom", width: "15%" },
    { key: "firstName", label: "Prénom", width: "15%" },
    { key: "phoneNumber", label: "Téléphone", width: "15%" },
    { key: "email", label: "Email", width: "25%" },
    { key: "postalCode", label: "Code Postal", width: "15%" },
    { key: "city", label: "Ville", width: "15%" },
];

const ContactPage = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [contactCount, setContactCount] = useState(0);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchContacts = async () => {
            const data = await ContactService.getContacts();
            setContacts(data);
            setContactCount(data.length);
        };

        fetchContacts();
    }, []);

    const filteredContacts = useMemo(() => {
        return contacts.filter(c =>
            `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [contacts, searchQuery]);

    const paginatedContacts = filteredContacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleAddContact = async (contact: Contact) => {
        const newContact = await ContactService.addContact(contact);
        setContacts([...contacts, newContact]);
        setIsModalOpen(false);
    };

    const handleEditContact = async (updatedContact: Contact) => {
        const modifiedContact = await ContactService.updateContact(updatedContact);
        setContacts((prev) => prev.map((c) => (c.id === modifiedContact.id ? modifiedContact : c)));
        setSelectedContact(modifiedContact);
        setIsModalOpen(false);
    };

    return (
        <div className="flex h-screen">
            <div className={`flex flex-col ${selectedContact ? "w-2/3" : "w-full"}`}>
                <ContactHeader contactCount={contactCount}>
                    <SearchInput
                        placeholder="Rechercher"
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                    <Button onClick={() => setIsMapOpen(true)} label="Géolocaliser" icon={<FaMapMarkerAlt />} bgColor="bg-green-600" hoverColor="hover:bg-green-700" textColor="text-white" border="border border-transparent" shadow="shadow-sm" rounded="rounded-lg"/>
                    <Button onClick={() => setIsModalOpen(true)} label="Ajouter" icon={<FaPlus />} />
                </ContactHeader>
                <div className="flex-1">
                    <List
                        data={paginatedContacts}
                        columns={contactColumns}
                        keyExtractor={(c) => c.id}
                        selectedItem={selectedContact}
                        onSelectItem={setSelectedContact}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={filteredContacts.length}
                        setItemsPerPage={setItemsPerPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>

            {selectedContact && (
                <div className="w-1/3 border-l border-gray-300 bg-white">
                    <ContactDetail
                        contact={selectedContact}
                        onEdit={() => {
                            setIsModalOpen(true);
                            setContactToEdit(selectedContact);
                        }}
                    />
                </div>
            )}
            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={contactToEdit ? handleEditContact : handleAddContact}
                initialContact={contactToEdit || undefined}
            />
            <ContactMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} contacts={contacts} />
        </div>
    );
};

export default ContactPage;