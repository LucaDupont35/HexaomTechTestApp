import { FC, ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    label?: string;
    icon?: ReactNode;
    textColor?: string;
    bgColor?: string;
    hoverColor?: string;
    rounded?: string;
    border?: string;
    shadow?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
                                     onClick,
                                     label = "Button",
                                     icon,
                                     textColor = "text-white",
                                     bgColor = "bg-blue-600",
                                     hoverColor = "hover:bg-blue-700",
                                     rounded = "rounded-lg",
                                     border = "",
                                     shadow = "",
                                     type = "button",
                                     disabled = false
                                 }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 transition cursor-pointer ${rounded} ${border} ${shadow} 
                ${disabled ? "bg-gray-400 text-gray-200 cursor-not-allowed" : `${bgColor} ${hoverColor} ${textColor}`}`}
            type={type}
        >
            {icon}
            {label}
        </button>
    );
};

export default Button;
