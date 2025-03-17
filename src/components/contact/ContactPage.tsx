import { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import { Contact } from "./types";

const ContactPage = () => {
    const [contactCount, setContactCount] = useState(0);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    return (
        <div className="flex h-screen">
            <div className={`flex flex-col ${selectedContact ? "w-2/3" : "w-full"}`}>
                <ContactHeader contactCount={contactCount} />
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
                    <ContactDetail contact={selectedContact} />
                </div>
            )}
        </div>
    );
};

export default ContactPage;