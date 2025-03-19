import {FC} from "react";

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder || "Rechercher..."}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
    );
};

export default SearchInput;
