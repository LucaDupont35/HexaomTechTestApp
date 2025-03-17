import {
    FaRegComments,
    FaRegAddressBook,
    FaRegCreditCard,
    FaRegFolderOpen,
    FaRegQuestionCircle,
    FaRegEnvelope,
    FaRegClipboard,
    FaRegLifeRing,
    FaBook, FaBox, FaInfoCircle
} from "react-icons/fa";
import NavHeader from "./NavHeader";
import NavList from "./NavList";

const NavBar = () => {
    const navItems = [
        { name: "Academy", icon: <FaBook />, path: "/academy" },
        { name: "Chat", icon: <FaRegComments />, path: "/chat" },
        { name: "Contacts", icon: <FaRegAddressBook />, path: "/contacts" },
        { name: "ECommerce", icon: <FaRegCreditCard />, subItems: [
                { name: "Orders", icon: <FaRegClipboard />, path: "/ecommerce/orders" },
                { name: "Products", icon: <FaBox />, path: "/ecommerce/products" }
            ] },
        { name: "File Manager", icon: <FaRegFolderOpen />, path: "/file-manager" },
        { name: "Help Center", icon: <FaRegQuestionCircle />, subItems: [
                { name: "FAQ", icon: <FaInfoCircle />, path: "/help-center/faq" },
                { name: "Support", icon: <FaRegLifeRing />, path: "/help-center/support" }
            ] },
        { name: "Mailbox", icon: <FaRegEnvelope />, path: "/mailbox" }
    ];

    return (
        <nav className="h-screen w-80 bg-gray-900 text-white p-4 flex flex-col text-[14px]">
            <NavHeader />
            <NavList items={navItems} />
        </nav>
    );
};
export default NavBar;