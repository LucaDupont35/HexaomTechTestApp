import { Contact } from "../../../models/Contact.ts";
import Form from "../../shared/form/Form.tsx";

interface ContactFormProps {
    onSubmit: (contact: Contact) => void;
    initialContact?: Contact;
    onCancel: () => void;
}

const ContactForm = ({ onSubmit, initialContact, onCancel }: ContactFormProps) => {

    const fields = [
        { name: "firstName", type: "text", placeholder: "Prénom", required: true },
        { name: "lastName", type: "text", placeholder: "Nom", required: true },
        { name: "email", type: "email", placeholder: "Email", required: true },
        { name: "phoneNumber", type: "text", placeholder: "Téléphone", required: true },
        { name: "postalCode", type: "text", placeholder: "Code Postal", required: false },
        { name: "city", type: "text", placeholder: "Ville", required: false },
    ];

    const initialData: Contact = initialContact || {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        postalCode: "",
        city: "",
    };

    return (
        <Form
            initialData={initialData}
            fields={fields}
            onSubmit={onSubmit}
            onCancel={onCancel}
        />
    );
};

export default ContactForm;
