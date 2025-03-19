import ContactForm from "./ContactForm";
import { Contact } from "../../../models/Contact.ts";
import Modal from "../../shared/modal/Modal.tsx";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (contact: Contact) => void;
    initialContact?: Contact;
}

const ContactFormModal = ({ isOpen, onClose, onSubmit, initialContact }: ContactFormModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={initialContact ? "Modifier le contact" : "Ajouter un contact"}
        >
            <ContactForm initialContact={initialContact} onSubmit={onSubmit} onCancel={onClose} />
        </Modal>
    );
};

export default ContactFormModal;
