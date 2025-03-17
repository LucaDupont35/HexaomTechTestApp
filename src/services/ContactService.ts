import { ContactRepository } from "../repositories/ContactRepository";

export const ContactService = {
    async getContacts() {
        return await ContactRepository.fetchContacts();
    }
};