import { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import { Contact } from "./types";
import {ContactService} from "../../services/ContactService.ts";
import AddContactButton from "./AddContactButton.tsx";
import ContactFormModal from "./ContactFormModal.tsx";

const ContactPage = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [contactCount, setContactCount] = useState(0);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);


    const handleAddContact = async (contact: Contact) => {
        try {
            const newContact = await ContactService.addContact(contact);
            setContacts([...contacts, newContact]);
            setContactCount((prev) => prev + 1);
            setIsModalOpen(false);
        } catch (error) {
            alert("Erreur lors de l'ajout du contact !");
        }
    };

    const handleEditContact = async (updatedContact: Contact) => {
        try {
            const modifiedContact = await ContactService.updateContact(updatedContact);

            if (!modifiedContact) {
                throw new Error("Le contact mis à jour est invalide.");
            }

            setContacts((prevContacts) =>
                prevContacts.map((c) => (c.id === modifiedContact.id ? modifiedContact : c))
            );

            setSelectedContact(modifiedContact);
            setIsModalOpen(false);
        } catch (error) {
            alert("Erreur lors de la modification du contact !");
        }
    };

    return (
        <div className="flex h-screen">
            <div className={`flex flex-col ${selectedContact ? "w-2/3" : "w-full"}`}>
                <ContactHeader contactCount={contactCount}>
                    <AddContactButton onClick={() => setIsModalOpen(true)} />
                </ContactHeader>
                <div className="flex-1">
                    <ContactList
                        selectedContact={selectedContact}
                        setContactCount={setContactCount}
                        setSelectedContact={setSelectedContact}
                    />
                </div>
            </div>
            {selectedContact && (
                <div className="w-1/3 border-l border-gray-300 bg-white">
                    <ContactDetail contact={selectedContact}
                                   onEdit={() => {
                        setIsModalOpen(true);
                        setContactToEdit(selectedContact);
                    }} />
                </div>
            )}

            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={contactToEdit ? handleEditContact : handleAddContact}
                initialContact={contactToEdit || undefined}
            />
        </div>
    );
};

export default ContactPage;