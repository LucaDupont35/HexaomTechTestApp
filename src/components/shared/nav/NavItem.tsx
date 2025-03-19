import {ReactNode, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export type Item = {
    name: string;
    icon?: ReactNode;
    path?: string;
    subItems?: Item[];
};

const NavItem = ({ name, icon, subItems, path }: Item) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = path && location.pathname === path;
    const hasActiveSubItem = subItems && subItems.some(sub => sub.path && location.pathname === sub.path);

    return (
        <div>
            <div
                className={`flex justify-between items-center p-3 rounded cursor-pointer text-white text-[14px] ${isActive || hasActiveSubItem ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                onClick={() => path ? navigate(path) : setIsOpen(!isOpen)}
            >
                <div className="flex items-center space-x-3">
                    {icon && <span className="text-lg text-white">{icon}</span>}
                    <span>{name}</span>
                </div>
                {subItems && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
            </div>
            {isOpen && subItems && (
                <ul className="ml-6 mt-2 space-y-1">
                    {subItems.map((subItem, index) => {
                        const isSubItemActive = subItem.path && location.pathname === subItem.path;
                        return (
                            <li key={index}
                                className={`flex items-center space-x-2 p-2 text-white rounded cursor-pointer text-[14px] ${isSubItemActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                                onClick={() => navigate(subItem.path || "#")}
                            >
                                {subItem.icon && <span className="text-sm">{subItem.icon}</span>}
                                <span className="text-sm">{subItem.name}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
export default NavItem;
