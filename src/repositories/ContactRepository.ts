import axios from "axios";
import {Contact} from "../components/contact/types.ts";

const API_URL = "http://localhost:8000/api/contact";


export const ContactRepository = {
    async fetchContacts() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des contacts :", error);
            throw error;
        }
    },

    async addContact(contact: Contact) {
        try {
            const response = await axios.post(API_URL, contact, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout du contact :", error);
            throw error;
        }
    },
    async updateContact(updatedContact: Contact): Promise<Contact> {
        try {
            const response = await axios.put(`${API_URL}/${updatedContact.id}`, updatedContact, {
                headers: { "Content-Type": "application/json" },
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la mise à jour du contact :", error);
            throw error;
        }
    }
};