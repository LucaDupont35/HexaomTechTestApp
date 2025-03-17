import axios from "axios";
import {Contact} from "../components/contact/types.ts";

export const ContactRepository = {
    async fetchContacts() {
        try {
            const response = await axios.get('http://localhost:8000/api/contact');
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des contacts :", error);
            throw error;
        }
    },

    async addContact(contact: Contact) {
        try {
            const response = await axios.post('http://localhost:8000/api/contact', contact, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout du contact :", error);
            throw error;
        }
    }
};