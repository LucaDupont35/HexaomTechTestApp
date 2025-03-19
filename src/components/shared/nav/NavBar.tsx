import NavHeader from "./NavHeader.tsx";
import {Item} from "./NavItem.tsx";
import NavList from "./NavList.tsx";

type NavBarProps = {
    items: Item[];
    logoSrc?: string;
    onLogoClick?: () => void;
};

const NavBar = ({ items, logoSrc, onLogoClick }: NavBarProps) => {
    return (
        <nav className="h-screen w-80 bg-gray-900 text-white p-4 flex flex-col text-[14px]">
            <NavHeader logoSrc={logoSrc} onLogoClick={onLogoClick} />
            <NavList items={items} />
        </nav>
    );
};
export default NavBar;
