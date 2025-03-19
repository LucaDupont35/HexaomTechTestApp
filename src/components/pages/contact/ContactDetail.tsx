import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserEdit } from "react-icons/fa";
import {Contact} from "../../../models/Contact.ts";
import Button from "../../shared/button/Button.tsx";

const ContactDetail = ({ contact, onEdit }: { contact: Contact | null, onEdit: () => void}) => {
    if (!contact) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div className="bg-white h-full flex flex-col">
            <div className="bg-blue-200 h-50 flex justify-center items-center ">
                <img src="/src/assets/pictures/profil-image.png" alt="avatar" className="w-40 h-40 rounded-full" />
            </div>

            <div className="p-4">
                <div className="text-center p-4 border-b border-gray-300 flex justify-between items-center">
                    <h2 className=" text-3xl font-bold text-gray-800 text-left p-4">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <div className="mt-auto flex justify-end p-4">
                        <Button
                            onClick={onEdit}
                            label="Éditer"
                            icon={<FaUserEdit className="w-4 h-4 text-gray-500" />}
                            bgColor="bg-white"
                            hoverColor="hover:bg-gray-100"
                            textColor="text-gray-700"
                            border="border border-gray-300"
                            shadow="shadow-sm"
                            rounded="rounded-lg"
                        />
                    </div>
                </div>
                <div className="p-4 space-y-3">
                    <div className="flex items-center space-x-3 p-4">
                        <FaEnvelope className="w-5 h-5"/>
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                            {contact.email}
                        </a>
                    </div>

                    <div className="flex items-center space-x-3 p-4">
                        <FaPhone className="w-5 h-5" />
                        <span>{contact.phoneNumber}</span>
                    </div>

                    {(contact.city || contact.postalCode )&& (
                        <div className="flex items-center space-x-3 p-4">
                            <FaMapMarkerAlt className="w-5 h-5" />
                            <div>
                        {contact.postalCode} {contact.city}
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
