import axios from "axios";

export const ContactRepository = {
    async fetchContacts() {
        try {
            const response = await axios.get('http://localhost:8000/api/contact');
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des contacts :", error);
            throw error;
        }
    }
};