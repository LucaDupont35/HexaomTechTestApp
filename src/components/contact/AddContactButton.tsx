import { FaPlus } from "react-icons/fa";

const AddContactButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md
                        hover:bg-blue-700 transition duration-200"
            onClick={onClick}
        >
            <FaPlus className="w-4 h-4" />
            <span>Ajouter</span>
        </button>
    );
};

export default AddContactButton;