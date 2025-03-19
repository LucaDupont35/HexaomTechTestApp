import {
    FaRegComments, FaRegAddressBook, FaRegCreditCard, FaRegFolderOpen,
    FaRegQuestionCircle, FaRegEnvelope, FaRegClipboard, FaRegLifeRing,
    FaBook, FaBox, FaInfoCircle
} from "react-icons/fa";
import NavBar from "../shared/nav/NavBar.tsx";

const navItems = [
    { name: "Academy", icon: <FaBook />, path: "/academy" },
    { name: "Chat", icon: <FaRegComments />, path: "/chat" },
    { name: "Contacts", icon: <FaRegAddressBook />, path: "/contacts" },
    {
        name: "ECommerce", icon: <FaRegCreditCard />, subItems: [
            { name: "Orders", icon: <FaRegClipboard />, path: "/ecommerce/orders" },
            { name: "Products", icon: <FaBox />, path: "/ecommerce/products" }
        ]
    },
    { name: "File Manager", icon: <FaRegFolderOpen />, path: "/file-manager" },
    {
        name: "Help Center", icon: <FaRegQuestionCircle />, subItems: [
            { name: "FAQ", icon: <FaInfoCircle />, path: "/help-center/faq" },
            { name: "Support", icon: <FaRegLifeRing />, path: "/help-center/support" }
        ]
    },
    { name: "Mailbox", icon: <FaRegEnvelope />, path: "/mailbox" }
];

const HexaomNavBar = () => {
    return (
        <NavBar
            items={navItems}
            logoSrc="/src/assets/pictures/logo-HEXAOM-blanc.png"
        />
    );
};

export default HexaomNavBar;
