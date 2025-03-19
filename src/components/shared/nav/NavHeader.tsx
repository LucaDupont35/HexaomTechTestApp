import { useNavigate } from "react-router-dom";

type NavHeaderProps = {
    logoSrc?: string;
    onLogoClick?: () => void;
};

const NavHeader = ({ logoSrc, onLogoClick }: NavHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div
            className="h-32 w-full bg-gray-900 flex justify-center items-center cursor-pointer"
            onClick={onLogoClick || (() => navigate("/"))}
        >
            <img
                src={logoSrc || "/src/assets/pictures/logo-HEXAOM-blanc.png"}
                alt="logo"
                className="h-20"
            />
        </div>
    );
};

export default NavHeader;
