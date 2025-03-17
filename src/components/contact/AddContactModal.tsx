import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Contact } from "./types";

const AddContactModal = ({ isOpen, onClose, onSubmit }: {
    isOpen: boolean,
    onClose: () => void,
    onSubmit: (contact: Contact) => void
}) => {
    const [formData, setFormData] = useState<Contact>({
        id: Date.now(),
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        postalCode: "",
        city: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                {/* Titre */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Ajouter un contact
                </h2>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input name="firstName" type="text" placeholder="Prénom"
                               className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                               onChange={handleChange} required
                        />
                        <input name="lastName" type="text" placeholder="Nom"
                               className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                               onChange={handleChange} required
                        />
                    </div>
                    <input name="email" type="email" placeholder="Email"
                           className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                           onChange={handleChange} required
                    />
                    <input name="phoneNumber" type="text" placeholder="Téléphone"
                           className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                           onChange={handleChange} required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input name="postalCode" type="text" placeholder="Code Postal"
                               className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                               onChange={handleChange} required
                        />
                        <input name="city" type="text" placeholder="Ville"
                               className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                               onChange={handleChange} required
                        />
                    </div>

                    {/* Boutons */}
                    <div className="flex justify-end space-x-3 mt-4">
                        <button type="button"
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 bg-gray-100 rounded-lg transition"
                                onClick={onClose}
                        >
                            Annuler
                        </button>
                        <button type="submit"
                                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContactModal;