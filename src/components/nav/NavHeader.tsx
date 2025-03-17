import {useNavigate} from "react-router-dom";

const NavHeader = () => {
    const navigate = useNavigate();

    return (
        <div
            className="h-32 w-full bg-gray-900 flex justify-center items-center cursor-pointer"
            onClick={() => navigate("/")}
        >
            <img src="/src/assets/pictures/logo-HEXAOM-blanc.png" alt="logo" className="h-20" />
        </div>
    );
};

export default NavHeader;