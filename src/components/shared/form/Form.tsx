import {useState} from "react";
import Button from "../button/Button.tsx";

interface Field {
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
}

interface FormProps<T> {
    initialData: T;
    fields: Field[];
    onSubmit: (data: T) => void;
    onCancel?: () => void;
}

const Form = <T extends Record<string, any>>({ initialData, fields, onSubmit, onCancel }: FormProps<T>) => {
    const [formData, setFormData] = useState<T>(initialData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateField = (name: string, value: string, field: Field) => {
        let error = "";

        if (field.required && !value) {
            error = "Ce champ est requis.";
        } else if (field.type === "email") {
            if (!value.includes("@") || !value.includes(".")) {
                error = "Adresse email invalide.";
            }
        } else if (field.name === "phoneNumber") {
            if (value.length !== 10 || isNaN(Number(value))) {
                error = "Numéro de téléphone invalide (10 chiffres requis).";
            }
        } else if (field.name === "postalCode") {
            if (value.length !== 5 || value == "" || isNaN(Number(value))) {
                error = "Le code postal doit contenir 5 chiffres.";
            }
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
        console.log(errors);
        checkFormValidity();
    };

    const checkFormValidity = () => {
        const hasErrors = Object.values(errors).some(error => error !== "");
        const hasEmptyRequiredFields = fields.some(field => field.required && !formData[field.name]);

        setIsFormValid(!hasErrors && !hasEmptyRequiredFields);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            return {...prevData, [name]: value};
        });

        const field = fields.find((f) => f.name === name);
        if (field) validateField(name, value, field);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;
        const newErrors: Record<string, string> = {};

        fields.forEach((field) => {
            const value = formData[field.name] || "";
            validateField(field.name, value, field);
            if (errors[field.name]) {
                newErrors[field.name] = errors[field.name];
                isValid = false;
            }
        });

        setErrors(newErrors);
        setIsFormValid(isValid);

        if (isValid) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
                <div key={field.name}>
                    <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                            errors[field.name] ? "border-red-500" : "border-gray-300"
                        }`}
                        value={formData[field.name]}
                        onChange={handleChange}
                    />
                    {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
                </div>
            ))}

            <div className="flex justify-end space-x-3 mt-4">
                {onCancel && (
                    <Button
                        onClick={onCancel}
                        label="Annuler"
                        bgColor="bg-gray-100"
                        rounded="rounded-lg"
                        textColor="text-gray-600"
                        hoverColor="text-gray-800"
                    />
                )}
                <Button
                    disabled={!isFormValid}
                    type="submit"
                    label="Enregistrer"
                    bgColor="bg-blue-600"
                    rounded="rounded-lg"
                    textColor="text-white"
                    hoverColor="bg-blue-700"
                />
            </div>
        </form>
    );
};

export default Form;
