import { ContactRepository } from "../repositories/ContactRepository";
import {Contact} from "../components/contact/types.ts";

export const ContactService = {
    async getContacts() {
        return await ContactRepository.fetchContacts();
    },
    async addContact(contact: Contact) {
        return await ContactRepository.addContact(contact);
    },
    async updateContact(updatedContact: Contact) {
        return await ContactRepository.updateContact(updatedContact);

    }
};