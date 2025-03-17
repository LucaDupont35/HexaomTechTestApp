import { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";

const ContactPage = () => {
    const [contactCount, setContactCount] = useState(0);

    return (
        <div>
            <ContactHeader contactCount={contactCount} />
            <ContactList setContactCount={setContactCount} />
        </div>
    );
};
export default ContactPage;